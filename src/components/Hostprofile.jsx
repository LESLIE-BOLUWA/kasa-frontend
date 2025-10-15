export default function HostProfile({ host, rating }) {
  // Crée un tableau pour afficher 5 étoiles
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="host-rating">
      <div className="host">
        <img src={host.picture} alt={host.name} className="host__picture" />
        <span className="host__name">{host.name}</span>
      </div>

      <div className="rating">
        {stars.map((star) => (
          <span key={star} className={star <= rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
