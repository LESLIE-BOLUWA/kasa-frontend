import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <section className="home">
      <Header />
      <Banner title="Chez vous, partout et ailleurs" image="/bannerhome.png" />
      <CardList />
      <Footer />
    </section>
  );
}
