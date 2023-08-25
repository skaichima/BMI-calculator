export const CalculatorFunction = (weight, height) => {
  if (weight && height) {
    const heightInMetres = height / 100;
    const bmi = weight / (heightInMetres * heightInMetres);

    const weightClass =
      bmi < 18.5
        ? "Underweight"
        : bmi >= 18.5 && bmi <= 24.99
        ? "Normal Weight"
        : bmi >= 25 && bmi <= 29.99
        ? "Overweight"
        : bmi >= 30 && bmi <= 34.99
        ? "Obese Class I"
        : bmi >= 35 && bmi <= 39.99
        ? "Obese Class II"
        : "Obese Class III";

    const classMotivation =
      bmi < 18.5
        ? "Embrace Your Journey: Being underweight doesn't define you. This is your chance to build strength and nourish your body with the care it deserves. Every step you take towards health is a step towards vitality."
        : bmi >= 18.5 && bmi <= 24.99
        ? "Celebrate Balance: You're right where your body loves to be. Keep up the good work by nourishing yourself with wholesome choices and staying active. Your dedication to wellness is your strength."
        : bmi >= 25 && bmi <= 29.99
        ? "Embrace Change: You have the power to transform your health journey. Each choice you make today is a step towards a healthier tomorrow. Believe in yourself, and remember that progress is a journey, not a destination."
        : bmi >= 30 && bmi <= 34.99
        ? "Rise Above: You're taking charge of your health, one choice at a time. Remember, every effort counts. Small victories add up to significant changes. You have the resilience within you to overcome any challenge."
        : bmi >= 35 && bmi <= 39.99
        ? "Unleash Your Potential: You're on a path of empowerment. Embrace your journey with courage and determination. Each step you take towards health is a statement of your strength and commitment to a brighter future."
        : "Forge Your Path: You possess an inner power that can overcome any obstacle. Your health journey is your triumph, and you have the strength to create positive change. Believe in your capacity for transformation.";

    const bmiReport = {
      bmiValue: bmi.toFixed(2),
      bmiClass: weightClass,
      motivation: classMotivation,
    };
    return bmiReport;
  } else {
    return <small>You need to fill in the required fields first</small>;
  }
};
