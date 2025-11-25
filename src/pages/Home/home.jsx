import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <section className="home">
      <Header />
      <Banner
        image="/bannerhome.png"
        title={
          <>
            Chez vous, <span className="br-mobile">partout et ailleurs</span>
          </>
        }
      />
      <CardList />
      <Footer />
    </section>
  );
}
