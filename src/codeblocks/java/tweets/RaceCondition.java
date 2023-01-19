package tweets;

import tweets.RaceCondition.Move.Go;
import tweets.RaceCondition.Move.Stop;

import java.util.ArrayList;
import java.util.List;
import java.util.function.BiFunction;
import java.util.stream.Stream;

import static java.lang.Math.random;
import static java.lang.String.format;
import static java.lang.Thread.ofVirtual;
import static java.lang.Thread.sleep;
import static java.util.stream.Collectors.joining;
import static java.util.stream.IntStream.range;
import static java.util.stream.Stream.generate;

public class RaceCondition {


    sealed interface FairCoin {
        record Heads() implements FairCoin {
        }
        record Tails() implements FairCoin {
        }
        static FairCoin toss() { return random() >= 0.5 ? new Heads() : new Tails(); }
    }
    public static void main(String[] args) throws InterruptedException {
        record RaceCar(String name, List<Move> moves) {
            RaceCar(String name) {
                this(name, new ArrayList<>());
            }
        }
        var racers = Stream.of("Nic", "Mad", "Cage", "Max").map(RaceCar::new).toList();
        var budget = 100;
        var racing = racers.stream().map(racer -> ofVirtual().unstarted(
                                                    () -> generate(FairCoin::toss).limit(budget)
                                                            .map(toss -> switch (toss) {
                                                                case FairCoin.Heads() -> new Stop();
                                                                case FairCoin.Tails() -> new Go();
                                                            }).forEach(racer.moves::add))).toList();
        for (Thread racer : racing) {
            racer.start(); racer.join();
        }
        BiFunction<RaceCar, Integer, String> format = (r, l) -> format("%1$5s: %2$s", r.name,
                                                            r.moves.stream().limit(l).map(String::valueOf)
                                                                .collect(joining()) + "Ó¯¯ò>");
        var replay = range(0, budget).boxed()
                                        .map(bound -> racers.stream().map(racer -> format.apply(racer, bound))
                                            .collect(joining("\n"))).toList();
        for (String move : replay) {
            System.out.print("\033[<4>;<0>f"); System.out.println(move); sleep(100);
        }

    }

    sealed interface Move {
        record Stop() implements Move {
            @Override
            public String toString() {
                return "";
            }
        }

        record Go() implements Move {
            @Override
            public String toString() {
                return "_";
            }
        }
    }
}
