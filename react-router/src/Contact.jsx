import Navbar from "./Navbar";
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <div>
      <Navbar active="contact" />

      <h1>
        <Mail size={30} /> Contact Us
      </h1>

      <p>
        Call us anytime!
      </p>
    </div>
  );
}

export default Contact;