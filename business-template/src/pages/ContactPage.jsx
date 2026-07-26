import Contact from "../components/Contact";
import business from "../data/business";

function ContactPage({ darkMode }) {
  return (
    <Contact
      business={business}
      darkMode={darkMode}
    />
  );
}

export default ContactPage;