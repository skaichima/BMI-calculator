import React, { useState, useEffect } from "react";
import "../styles/calculator.css";
import workoutImage from "../assets/workout-pic.jpg";
import { CalculatorFunction } from "../functions/CalculatorFunction";

function BmiCalculator(props) {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [age, setAge] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  function handleWeightChange(e) {
    if (e.target.value) {
      setWeight(e.target.value);
    }
  }

  function handleHeightChange(e) {
    if (e.target.value) {
      setHeight(e.target.value);
    }
  }

  function handleAgeChange(e) {
    if (e.target.value) {
      setAge(e.target.value);
    }
  }

  function handlesubmit() {
    setBmi(CalculatorFunction(weight, height));
  }

  const validateForm = () => {
    if (weight && height && age) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // Call the validation function whenever a field value changes
  useEffect(() => {
    validateForm();
  }, [weight, height, age]);

  return (
    <main className="header">
      <section className="calculator">
        <form action="">
          <h1>BMI CALCULATOR</h1>
          <label className="input-field" htmlFor="age">
            <span>Age</span>
            <input
              id="age"
              type="Number"
              min={0}
              required
              onChange={handleAgeChange}
            />
          </label>
          <label className="input-field" htmlFor="height">
            <span>Height(cm)</span>
            <input
              id="height"
              type="Number"
              min={10}
              required
              onChange={handleHeightChange}
            />
          </label>
          <label className="input-field" htmlFor="weight">
            <span>Weight(kg)</span>
            <input
              id="weight"
              type="Number"
              min={10}
              required
              onChange={handleWeightChange}
            />
          </label>
          <label className="input-field" htmlFor="gender">
            <span>Gender</span>
            <select
              name="gender"
              id=""
              defaultValue={"-- No option selected --"}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <div className="submit-btn">
            <input
              type="button"
              value="SUBMIT"
              disabled={!validateForm}
              onClick={handlesubmit}
            />
          </div>
        </form>
        <div className="image-container">
          <div>
            {(bmi) ? (
              <>
              <h1>
                {bmi.bmiValue}
              </h1>
              <span className="result-class">
              Weight class; {bmi.bmiClass}
              </span>
              <p className="motivation">"{bmi.motivation}"</p>
              </>
            ) : (
              ""
            )}
          </div>
          <img src={workoutImage} alt="" loading="lazy" />
        </div>
      </section>
    </main>
  );
}

export default BmiCalculator;
