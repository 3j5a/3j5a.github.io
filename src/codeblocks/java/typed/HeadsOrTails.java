package typed;

import typed.HeadsOrTails.Toss.Tails;

import static java.lang.System.out;
import static typed.HeadsOrTails.Toss.*;

public class HeadsOrTails {

    sealed interface Toss {
        record Heads() implements Toss {};
        record Tails() implements Toss {};
    }

    public static void main(String[] args) {
        var toss = Math.random() >= 0.5 ? new Tails() : new Heads();
        out.println(
                switch (toss) {
                    case Heads() -> "heads";
                    case Tails() -> "tails";
                }
        );
    }
}
