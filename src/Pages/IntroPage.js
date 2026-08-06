import { Link } from "react-router-dom";

function IntroPage() {
  return (
    <div>
      <h1>Intro Page placeholder</h1>
      <Link to="/search" className="intro-page__button">
        Get Started
      </Link>
    </div>
  );
}

export default IntroPage;
