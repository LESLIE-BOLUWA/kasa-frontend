import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carrousel from "../../components/Carrousel";
import Hostprofile from "../../components/Hostprofile";
import Collapse from "../../components/Collapse";
import { Tags } from "../../components/Tags";

export default function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/properties/${id}`);
        if (!res.ok) throw new Error("api-list-failed");
        const data = await res.json();

        if (data) {
          setProperty(data);
        } else {
          navigate("/404"); // id inexistant
        }
      } catch (e) {
        console.error("Erreur API :", e);
        navigate("/404");
      }
    })();
  }, [id, navigate]);

  if (!property) return null;
  const ABOUT_ITEMS = [
    {
      id: "Description",
      title: "Description",
      content:
        "Vous serez à 50m du Canal saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux  bars et restaurants. Au coeur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'Est (7min à pieds).",
    },
    {
      id: "Équipements",
      title: "Équipements",
      content:
        "Climatisation Wifi Espace de travail Fer à repasser Sèche-cheveux  Cintres",
    },
  ];

  return (
    <>
      <Header />
      <main className="logement">
        <Carrousel pictures={property.pictures} />
        <div className="logement_infos">
          <div className="logement_infos_left">
            <h1 className="logement_title">{property.title}</h1>
            <p className="logement_location">{property.location}</p>
            <Tags tags={property.tags} />
          </div>

          <Hostprofile host={property.host} rating={property.rating} />
        </div>

        <div className="logement_collapses">
          <Collapse
            key="description"
            title="Description"
            children={property.description}
            className="logement_collapse_item"
          ></Collapse>
          <Collapse
            key="equipements"
            title="Équipements"
            children={property.equipments.map((item, index) => (
              <span key={index}>
                {item} <br />{" "}
              </span>
            ))}
            className="logement_collapse_item"
          ></Collapse>
        </div>
      </main>
      <Footer />
    </>
  );
}
