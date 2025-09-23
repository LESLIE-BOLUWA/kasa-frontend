import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Accordion from "../../components/Accordion";
import Footer from "../../components/Footer";

export default function About() {
  console.log("About page loaded"); // juste pour vérifier dans la console

  return (
    <>
      <Header />
      <div>
        <Banner />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
      <Footer />
    </>
  );
}
