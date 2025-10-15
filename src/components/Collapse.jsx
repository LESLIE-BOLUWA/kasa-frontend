// Accordion (accordion description/equipement)

import { useState } from "react";
import arrowUp from "../../public/arrow_up.png";
import arrowDown from "../../public/arrow_down.png";

export default function Collapse({
  title, // texte ou élément affiché dans l'entête
  children, // contenu affiché quand c'est ouvert
  defaultOpen = false, // ouvert ou fermé par défaut
  className = "", // pour ajouter des classes spécifiques selon la page
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`collapse ${className}`}>
      <button
        type="button"
        className="collapse__header"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="collapse__title">{title}</span>
        <span className="collapse__chevron">
          {open ? <img src={arrowUp} alt="" /> : <img src={arrowDown} alt="" />}
        </span>
      </button>

      {open && <div className="collapse__content">{children}</div>}
    </div>
  );
}
