import { Link } from "react-router-dom";
import { ChefHat, Soup } from "lucide-react";
import "./IntroPage.css";
import Navbar from "../components/Navbar";

// function IntroPages() {
//   return (
//     <div>
//       <h1>Intro Page placeholder</h1>
//       <Link to="/search" className="intro-page__button">
//         Get Started
//       </Link>
//     </div>
//   );
// }

function IntroPage() {
  return (
    <div>
      <Navbar />

      <div className="cook-hero-wrapper">
        <div className="cook-herom">
          <div className="cook-hero__content">
            <div className="cook-hero__badge">
              <Soup size={20} color="#ffffff" strokeWidth={2} />
            </div>
            <h1 className="cook-hero__heading">
              Let's cook
              <br />
              something amazing!
            </h1>
            <p className="cook-hero__subtext">
              Cook fresh meals every day and enjoy healthy, delicious living
            </p>

            <Link to="/search" className="cook-hero__cta">
              Get Started
              <span className="cook-hero__cta-icon">
                <ChefHat size={18} strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
