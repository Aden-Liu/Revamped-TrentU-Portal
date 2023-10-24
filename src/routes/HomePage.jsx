import "../style.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="news"></div>
        <div className="events"></div>
        <div className="notifications"></div>
        <div className="bulletins"></div>
      </div>
      <Footer />
    </>
  );
}
