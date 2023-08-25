import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import bgVideo from "../assets/bg-video.mp4";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="background">
        <div className="bg"></div>
        <video src={bgVideo} autoPlay loop muted loading="lazy"></video>
      </div>
      <Outlet />
      {/* <footer>
        <p>&copy; {new Date().getFullYear()} Your App Name</p>
      </footer> */}
    </>
  );
}

export default Layout;
