package tweets;

public class PointOfView {

    sealed interface Glass {
        public record EmptyGlass() implements Glass {};
        record FullGlass() implements Glass {};
        non-sealed interface GlassHalf extends Glass {}

        default GlassHalf half() {
            record Empty() implements GlassHalf {};
            record Full() implements GlassHalf {};
            return new Full();//🤔
        }
    }

}

