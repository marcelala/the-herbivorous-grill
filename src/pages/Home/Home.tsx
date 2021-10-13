import heroImg from "../../assets/images/fire.png";
import logo from "../../assets/images/logo.svg";

export default function Home() {
  return (
    <section id="home">
      <img src={heroImg} alt={"fire"} className="hero-background" />
      <div className="brand">
        <img src={logo} alt="icon of a small plant in a pot" />
        <span className=" brand-name">The Herbivorous Grill</span>
      </div>
      <div className=" container">
        <h3>Peace begins in your plate</h3>
      </div>
    </section>
  );
}
