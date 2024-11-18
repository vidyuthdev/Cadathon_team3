package frc.robot;

public class autorun2 {
    public class AutonomousRun {

        // Constants for scoring
        private static final int LOW_HOOP_POINTS = 3;
        private static final int MIDDLE_HOOP_POINTS = 8;
        private static final int HIGH_HOOP_POINTS = 12;
        private static final int ELECTROLYTE_POINTS = 1 / 2; // Represented as 0.5 points
        private static final int EXIT_ZONE_POINTS = 6;

        // Simulate robot actions during autonomous period
        public static void main(String[] args) {
            int totalScore = 0;

            // Step 1: Dunk a basketball in the high hoop
            totalScore += scoreHighHoop(2); // Dunk 2 balls in the high hoop

            // Step 2: Dunk a basketball in the middle hoop
            totalScore += scoreMiddleHoop(1); // Dunk 1 ball in the middle hoop

            // Step 3: Dunk a basketball in the low hoop
            totalScore += scoreLowHoop(3); // Dunk 3 balls in the low hoop

            // Step 4: Score electrolytes in the alliance dunk tank
            totalScore += scoreElectrolytes(50); // Score 50 electrolytes

            // Step 5: Exit alliance zone
            totalScore += exitAllianceZone(1); // Robot exits the zone

            // Print total score
            System.out.println("Total Autonomous Score: " + totalScore);
        }

        // Method to score basketballs in the high hoop
        public static int scoreHighHoop(int numberOfBalls) {
            return numberOfBalls * HIGH_HOOP_POINTS;
        }

        // Method to score basketballs in the middle hoop
        public static int scoreMiddleHoop(int numberOfBalls) {
            return numberOfBalls * MIDDLE_HOOP_POINTS;
        }

        // Method to score basketballs in the low hoop
        public static int scoreLowHoop(int numberOfBalls) {
            return numberOfBalls * LOW_HOOP_POINTS;
        }

        // Method to score electrolytes
        public static double scoreElectrolytes(int numberOfElectrolytes) {
            return numberOfElectrolytes * ELECTROLYTE_POINTS;
        }

        // Method to add points for exiting the alliance zone
        public static int exitAllianceZone(int robotCount) {
            return robotCount * EXIT_ZONE_POINTS;
        }
    }

}
