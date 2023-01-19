package tweets;

import tweets.Marbles.Marble.Blue;
import tweets.Marbles.Marble.Yellow;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.function.Predicate;

import static java.lang.System.out;
import static java.util.Collections.shuffle;
import static java.util.stream.Collectors.collectingAndThen;
import static java.util.stream.Collectors.toCollection;
import static java.util.stream.Stream.concat;
import static java.util.stream.Stream.generate;

public class Marbles {

    sealed interface Marble {
        record Yellow() implements Marble {}
        record Blue() implements Marble {}
    }

    public static void main(String[] args) {
        var yellow = 5; var blue = 5;
        for (var marblesToDraw = 2; marblesToDraw <= yellow + blue; marblesToDraw++) {
            var experimentsCount = 1_000_000; var firstAndLastDrawnSameColorCount = 0.0d;
            for (var experiment = 1; experiment <= experimentsCount; experiment++) {
                var yellows = generate(Yellow::new); var blues = generate(Blue::new);
                var bag = concat(yellows.limit(yellow), blues.limit(blue))
                            .collect(collectingAndThen(toCollection(ArrayList::new),
                                        it -> { shuffle(it); return it; }));
                var marbles = bag.stream().limit(marblesToDraw).collect(toCollection(LinkedList::new));
                if (sameColor(marbles.getFirst(), marbles.getLast())) {
                    firstAndLastDrawnSameColorCount++;
                }
            }
            out.print(firstAndLastDrawnSameColorCount / experimentsCount + " ");
        }
        out.println(4d/9);
    }

    static boolean sameColor(Marble a, Marble b) {
        Predicate<Marble> sameColorPredicate = switch (a) {
            case Yellow() -> it -> it instanceof Yellow;
            case Blue() -> it -> it instanceof Blue;
        };
        return sameColorPredicate.test(b);
    }

}
