package frc.robot;

public class autorun1 {
}
package frc.robot;

import edu.wpi.first.wpilibj.Timer;
import edu.wpi.first.wpilibj.motorcontrol.PWMSparkMax;
import edu.wpi.first.wpilibj.Encoder;
import edu.wpi.first.wpilibj.ADIS16470_IMU;
import edu.wpi.first.wpilibj.drive.DifferentialDrive;
import edu.wpi.first.wpilibj.controller.PIDController;

public class Robot extends TimedRobot {
    // Drivetrain components
    private PWMSparkMax leftMotor;
    private PWMSparkMax rightMotor;
    private DifferentialDrive drive;

    // Shooter and intake components
    private PWMSparkMax shooterMotor;
    private PWMSparkMax intakeMotor;

    // Sensors
    private Encoder leftEncoder;
    private Encoder rightEncoder;
    private ADIS16470_IMU gyro;

    // PID Controllers
    private PIDController drivePID;
    private PIDController gyroPID;

    // Timer for autonomous steps
    private Timer timer;

    @Override
    public void robotInit() {
        // Initialize motors
        leftMotor = new PWMSparkMax(0);
        rightMotor = new PWMSparkMax(1);
        drive = new DifferentialDrive(leftMotor, rightMotor);

        shooterMotor = new PWMSparkMax(2);
        intakeMotor = new PWMSparkMax(3);

        // Initialize sensors
        leftEncoder = new Encoder(0, 1);
        rightEncoder = new Encoder(2, 3);
        gyro = new ADIS16470_IMU();

        // Initialize PID controllers
        drivePID = new PIDController(0.05, 0.0, 0.0);
        gyroPID = new PIDController(0.02, 0.0, 0.0);

        // Timer
        timer = new Timer();
    }

    @Override
    public void autonomousInit() {
        // Reset encoders and gyro
        leftEncoder.reset();
        rightEncoder.reset();
        gyro.reset();

        // Start the timer
        timer.reset();
        timer.start();
    }

    @Override
    public void autonomousPeriodic() {
        double elapsedTime = timer.get();

        // Step 1: Move to HIGH HOOP and shoot
        if (elapsedTime < 3.0) {
            driveToPosition(3.0, 0.0); // Example: drive 3 meters forward
            shooterMotor.set(1.0); // Start shooter motor
        } else if (elapsedTime < 5.0) {
            shooterMotor.stopMotor(); // Stop shooter motor
        }

        // Step 2: Collect second basketball
        else if (elapsedTime < 8.0) {
            driveToPosition(1.0, 2.5); // Example: drive to basketball position
            intakeMotor.set(1.0); // Start intake motor
        } else if (elapsedTime < 9.0) {
            intakeMotor.stopMotor(); // Stop intake motor
        }

        // Step 3: Exit the zone
        else if (elapsedTime < 12.0) {
            driveToPosition(5.0, 0.0); // Example: drive out of the zone
        } else {
            drive.stopMotor(); // Stop the robot
        }
    }

    private void driveToPosition(double targetDistance, double targetAngle) {
        // Calculate errors
        double distanceError = targetDistance - leftEncoder.getDistance();
        double angleError = targetAngle - gyro.getAngle();

        // PID calculations
        double speed = drivePID.calculate(distanceError);
        double turn = gyroPID.calculate(angleError);

        // Drive the robot
        drive.arcadeDrive(speed, turn);

        // Stop motors if within tolerance
        if (Math.abs(distanceError) < 0.1) {
            drive.stopMotor();
        }
    }
}
