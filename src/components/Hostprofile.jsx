import Rating from "./Rating";
export default function HostProfile({ host, rating }) {
  // Crée un tableau pour afficher 5 étoiles
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="host-rating">
      <div className="host">
        <span className="host__name">{host.name}</span>
        <img src={host.picture} alt={host.name} className="host__picture" />
      </div>

      <Rating rating={rating} />
    </div>
  );
}
