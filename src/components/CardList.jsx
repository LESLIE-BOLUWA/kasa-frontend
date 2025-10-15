// CardList (Conteneur des annonces)
import { useEffect, useState } from "react";
import Card from "./Card";

export default function CardList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  return (
    <div className="card-list">
      {properties.map((property) => (
        <Card
          key={property.id} // ✅ garde la key
          id={property.id} // ✅ passe bien l'id à Card
          title={property.title}
          cover={property.cover}
        />
      ))}
    </div>
  );
}
