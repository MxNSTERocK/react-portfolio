import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* Hide the star background in the "Works" section */}
        <div className="relative z-0 bg-tertiary">
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>
        {/* <Feedbacks /> */}
        {/* Hide the star background in the rest of the content */}
        <div className="relative z-0 bg-tertiary">
          <Contact />
        </div>
        {/* Render the star background in the "Hero" and "Contact" sections */}
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
