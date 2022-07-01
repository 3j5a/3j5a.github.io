package runtimes;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;

public class SDKMANList {

    public static void main(String[] args) throws IOException, InterruptedException {
        ProcessBuilder processBuilder = new ProcessBuilder("/bin/bash").redirectErrorStream(true);
        Process bash = processBuilder.start();
        try (OutputStreamWriter commands = new OutputStreamWriter(bash.getOutputStream(), StandardCharsets.UTF_8);
             BufferedReader output = new BufferedReader(new InputStreamReader(bash.getInputStream()))
        ) {
            commands.write("source ~/.zshrc\n");
            commands.write("sdk list java\n");
            commands.write("exit\n");
            commands.flush();
            output.lines()
                    .filter(line -> line.contains("|"))
                    .map(line -> line.split("\\|")[0].trim())
                    .filter(line -> line.matches("\\w+"))
                    .forEach(System.out::println);
            bash.waitFor();
        }
    }
}
