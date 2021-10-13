import { useHistory } from "react-router-dom";

//project files
import Map from "./Map";
import Button from "../../components/Button";
import BookingForm from "./BookingForm";
import contactImg from "../../assets/images/owner.png";

export default function Contact() {
  const history = useHistory();

  {
    /*const hours = restaurant.openingHours;
  const address = restaurant.adress;

  const openingHours = hours.map((item) => (
    <li key={item.id}>
      {item.id}: {item.hours}
    </li>
  ));
  const fullAddress = address.map((item) => (
    <li key={item.id}>
      {item.id}: {item.value}
    </li>
  ));
*/
  }
  return (
    <section className="contact">
      <img src={contactImg} alt="man putting a pizza in wood oven" />
      <div className="contact-content">
        <div className="text-box-section">
          <div className="title">
            <h2>Get in</h2>
            <h1>Contact</h1>
          </div>
          <p>Drop us a line here… we look forward to hearing from you!</p>
        </div>
        <section className="hours">
          <h2 className="oleo">Opening Hours</h2>
          {/*<ul>{openingHours}</ul>*/}
        </section>
        <section className="booking">
          <h2 className="oleo">Booking</h2>
          <BookingForm />
          <Button
            theme={"primary"}
            onClick={() =>
              alert(
                "Oh no, looks like this form is out of order.Please send an email instead. Sorry for the inconvenience!"
              )
            }
          >
            Book a table
          </Button>
        </section>
        <section className="address">
          <h2 className="oleo">Address</h2>

          {/* <ul>{fullAddress}</ul>*/}
          <Map
            latitude={59.34055553456532}
            longitude={18.009009253501386}
            zoom={13}
          />
        </section>
        <Button onClick={() => history.goBack()} theme={"secondary"}>
          Go back
        </Button>
      </div>
    </section>
  );
}
