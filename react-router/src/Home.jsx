import Navbar from "./Navbar";
import { Home } from "lucide-react";

function HomePage() {
  return (
    <div>
      <Navbar active="home" />
      
      <h1>
        <Home size={30} /> Home Page
      </h1>

      <p>Welcome to Home Page</p>
    </div>
  );
}

export default HomePage;