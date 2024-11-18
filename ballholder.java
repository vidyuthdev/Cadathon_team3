public class IntakeMechanism {
    
    // Class to represent a Gear
    static class Gear {
        private int teeth;
        private double rotationSpeed; // in RPM

        public Gear(int teeth, double rotationSpeed) {
            this.teeth = teeth;
            this.rotationSpeed = rotationSpeed;
        }

        public void rotate() {
            System.out.println("Gear with " + teeth + " teeth rotating at " + rotationSpeed + " RPM.");
        }
    }

    // Class to represent a Roller
    static class Roller {
        private double diameter; // in mm
        private double rotationSpeed; // in RPM

        public Roller(double diameter) {
            this.diameter = diameter;
            this.rotationSpeed = 0; // Initially stopped
        }

        public void setRotationSpeed(double speed) {
            this.rotationSpeed = speed;
        }

        public void rotate() {
            System.out.println("Roller with " + diameter + " mm diameter rotating at " + rotationSpeed + " RPM.");
        }
    }

    public static void main(String[] args) {
        // Creating gears
        Gear gear1 = new Gear(20, 150); // 20 teeth, 150 RPM
        Gear gear2 = new Gear(30, 100); // 30 teeth, 100 RPM

        // Creating rollers
        Roller roller1 = new Roller(50); // 50 mm diameter
        Roller roller2 = new Roller(60); // 60 mm diameter

        // Simulating rotation
        gear1.rotate();
        gear2.rotate();

        // Setting roller speeds
        roller1.setRotationSpeed(150); // Assume same speed as gear1
        roller2.setRotationSpeed(100); // Assume same speed as gear2

        // Rotating rollers
        roller1.rotate();
        roller2.rotate();
    }
}
