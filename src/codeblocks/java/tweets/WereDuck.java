package tweets;

public class WereDuck {

    public static void main(String[] args) {
        var duck = (Quacks & Waddles) Thing::create;
        var wolf = (Howls & Trots) Thing::create;
        var wereduck = (Howls & Quacks & Trots & Waddles) Thing::create;
    }

    interface Quacks extends Thing {
        default void quack() {
            System.out.println("quack");
        }
    }

    interface Waddles extends Thing {
        default void waddle() {
            System.out.println("waddle");
        }
    }

    interface Howls extends Thing {
        default void howle() {
            System.out.println("howl");
        }
    }

    interface Trots extends Thing {
        default void trot() {
            System.out.println("trot");
        }
    }

    interface Thing {
        void ____();
        static void create() {};
    }
}
