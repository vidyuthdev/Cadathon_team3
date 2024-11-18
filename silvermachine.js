import edu.wpi.first.wpilibj.motorcontrol.MotorController;
import edu.wpi.first.wpilibj.motorcontrol.PWMVictorSPX;
import edu.wpi.first.wpilibj.DigitalInput;
import edu.wpi.first.wpilibj.Encoder;
import edu.wpi.first.wpilibj2.command.SubsystemBase;

public class ElevatorSubsystem extends SubsystemBase {

        // Motor controller
        private final MotorController elevatorMotor = new PWMVictorSPX(0); // Replace 0 with the actual port

        // Sensors
        private final DigitalInput topLimitSwitch = new DigitalInput(1); // Replace with actual ports
        private final DigitalInput bottomLimitSwitch = new DigitalInput(2);
        private final Encoder encoder = new Encoder(3, 4); // Replace with actual ports

  / Target position (in encoder counts)
        private final int targetPosition = 5000;

        // Constructor
        public ElevatorSubsystem() {
            // Configure the encoder if needed
            encoder.setDistancePerPulse(1.0); // Set based on your encoder specs
        }

        // Lift the elevator
        public void lift() {
            if (!topLimitSwitch.get()) { // Check top limit switch
                elevatorMotor.set(0.7); // Move up at 70% power
            } else {
                stop();
            }
        }

        // Lower the elevator
        public void lower() {
            if (!bottomLimitSwitch.get()) { // Check bottom limit switch
                elevatorMotor.set(-0.7); // Move down at

            }


