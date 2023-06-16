package tweets;

import java.util.Optional;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static java.lang.System.out;

public class FizzBuzzing {


public static void main(String[] args) {

    BiFunction<String, Function<Integer, Integer>, Function<Integer, Optional<String>>> labeler = (label, marker) ->
                                i -> marker.apply(i) == 0 ? Optional.of(label) : Optional.empty();

    var fizzer = labeler.apply("fizz", i -> i % 3);
    var buzzer = labeler.apply("buzz", i -> i % 5);

    Function<Integer, String> fizzbuzz = i -> fizzer.apply(i)
                                              .map(fizz -> buzzer.apply(i).map(buzz -> fizz + buzz).orElse(fizz))
                                              .or(() -> buzzer.apply(i))
                                              .orElse(String.valueOf(i));

    out.println(IntStream.range(1, 101).boxed().map(fizzbuzz).collect(Collectors.joining(" ")));
}



}
