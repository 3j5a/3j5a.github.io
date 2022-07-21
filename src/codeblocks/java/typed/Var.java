package typed;

public class Var {

    public static void main(String[] args) {
        var var = new Object() { int x; }; //var isn't a keyword
        var.x = 10;

        var hi = new Object() { public String toString() { return "¡Hola!"; }};

        /*
         by all means use a properly named
         local record class if you need stuff like this
        */

        System.out.println(hi);
        System.out.println(hi.getClass());
        System.out.println(var.getClass());
    }

}
