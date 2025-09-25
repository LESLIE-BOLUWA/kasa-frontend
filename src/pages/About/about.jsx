import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
const ABOUT_ITEMS = [
  {
    id: "reliability",
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées.",
  },
  {
    id: "respect",
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur entraînera une exclusion de la plateforme.",
  },
  {
    id: "service",
    title: "Service",
    content:
      "Notre équipe est disponible pour vous accompagner avant, pendant et après votre séjour.",
  },
  {
    id: "safety",
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa, autant pour nos hôtes que pour les voyageurs. Chaque logement respecte des critères de sécurité stricts.",
  },
];

export default function About() {
  return (
    <section className="about">
      <Banner title="" image="/img/about-hero.jpg" />
      {ABOUT_ITEMS.map((it) => (
        <Collapse key={it.id} title={it.title}>
          <p>{it.content}</p>
        </Collapse>
      ))}
    </section>
  );
}
