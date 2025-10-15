import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const ABOUT_ITEMS = [
  {
    id: "reliability",
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: "respect",
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbationdu voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: "service",
    title: "Service",
    content:
      "La qualité est coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    id: "safety",
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa, aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une évaluation aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default function About() {
  return (
    <section className="about">
      <Header />
      <Banner title="" image="/bannerabout.png" />
      <div className="about_collapses_list">
        {ABOUT_ITEMS.map((it) => (
          <Collapse key={it.id} title={it.title}>
            <p>{it.content}</p>
          </Collapse>
        ))}
      </div>
      <Footer />
    </section>
  );
}
