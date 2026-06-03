//Task 19: Interface Implementation

interface Playable {
    void play();
}

class Guitar implements Playable {
    public void play() {
        System.out.println("Strumming the guitar");
    }
}

class Piano implements Playable {
    public void play() {
        System.out.println("Playing the piano keys");
    }
}

class Task_19 {
    public static void main(String[] args) {
        Guitar g = new Guitar();
        g.play();

        Piano p = new Piano();
        p.play();
    }
}
