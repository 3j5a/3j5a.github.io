package tweets;

import java.time.LocalDate;
import java.time.Month;
import java.util.stream.Collectors;

import static java.lang.System.out;
import static java.util.stream.IntStream.range;

public class HappyBirthday {

    public static void main(String[] args) {
        var birthday = LocalDate.of(1995, Month.MAY, 23);
        var today = LocalDate.now();
        var age = birthday.until(today).getYears();
        if (today.minusYears(age).equals(birthday)) {
            out.println(range(0, age)
                        .boxed().map(year -> "\uD83D\uDD6F")
                        .collect(Collectors.joining()));
        }
    }
}
