package tweets;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.IntStream;

import static java.lang.Thread.ofVirtual;
import static java.util.stream.Collectors.joining;

public class BogusSort {


    public static void main(String[] args) throws InterruptedException {
        var sequence = List.of(99, 53, 7, 23, 11);
        var indexes = IntStream.range(0, sequence.size()).boxed().toList();
        var universeCount = IntStream.range(1, sequence.size() + 1).reduce(1, (x, y) -> x * y);
        System.out.println("sequence " + Arrays.toString(sequence.toArray()));
        System.out.println("total universe count = " + universeCount);
        var universeFactory = ofVirtual().name("universe-", 0).factory();
        IntStream.range(0, universeCount).parallel().boxed()
                .map(
                        x -> universeFactory.newThread(() -> {
                            var it = new ArrayList<>(indexes);
                            Collections.shuffle(it);
                            var someUnsorted = indexes.stream().limit(indexes.size() - 1)
                                    .filter(i -> sequence.get(it.get(i)) > sequence.get(it.get(i + 1)))
                                    .findAny();
                            if (someUnsorted.isEmpty()) {
                                System.out.println("sorted universe found: "
                                        + Thread.currentThread() +
                                        " [" + it.stream().map(sequence::get)
                                        .map(String::valueOf)
                                        .collect(joining(" ")) + "]");
                                System.exit(0);
                            }
                        }))
                .forEach(universe -> {
                    try {
                        universe.start();
                        universe.join();
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                });
        System.out.println("none sorted...");
    }
}
