import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Error() {
  return (
    <section className="error">
      <Header />
      <h1 className="error__code">404</h1>
      <p className="error__message">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d’accueil
      </Link>
      <Footer />
    </section>
  );
}
