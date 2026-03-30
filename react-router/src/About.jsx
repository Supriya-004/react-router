import Navbar from "./Navbar";
import { User, Info } from "lucide-react";

function About() {
  return (
    <div>
      <Navbar active="about" />

      <h1>
        <Info size={30} /> About Us
      </h1>

      <p>
         This is About page
      </p>
    </div>
  );
}

export default About;