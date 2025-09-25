// Layout de l'application
// Composants communs
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
export default function App({ children }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
