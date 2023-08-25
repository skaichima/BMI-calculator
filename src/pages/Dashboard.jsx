import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import rightButton from "../assets/right-button.svg";
import bgVideo from "../assets/bg-video.mp4";

function Dashboard() {
  return (
    <main className="header">
      <div className="background">
        <div></div>
        <video src={bgVideo} autoPlay loop muted></video>
      </div>
      <section className="main-description">
        <div>
          <h1 className="title">
            Discover Your Body Mass Index <b>BMI</b> - A Quick Health Insight
          </h1>
          <h2>
            Uncover your health journey with our BMI calculator. Get an instant
            estimate of your BMI, a simple measure that can provide valuable
            insights into your overall health status.Take a step
            towards a healthier lifestyle by gauging your BMI today.
          </h2>
        </div>

        <Link className="link" to="/bmi_calculator">
          <span>BMI Calculator</span>
          <div className="link-btn">
            <img src={rightButton} alt="" />
          </div>
        </Link>
      </section>
    </main>
  );
}

export default Dashboard;
