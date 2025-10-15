import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carrousel from "../../components/Carrousel";
import Hostprofile from "../../components/Hostprofile";
import Collaspe from "../../components/Collapse";

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
        console.log(data);

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
        <h1>{property.title}</h1>
        <p>{property.location}</p>

        <Hostprofile host={property.host} rating={property.rating} />

        <div className="tags">
          {property.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <Collaspe title="Description" content={property.description} />
        <Collaspe
          title="Équipements"
          content={property.equipments}
          isList={true}
        />
        {/* Étape 4: Collapses Description & Équipements */}
      </main>
      <Footer />
    </>
  );
}
