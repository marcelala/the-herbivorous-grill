import { useHistory } from "react-router-dom";

//project files
import Map from "./Map";
import Button from "../../components/Button";
import BookingForm from "./BookingForm";
import contactImg from "../../assets/images/owner.png";
import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../../scripts/fireStore";

export default interface iDay {
  day: {
    label: string;
    value: string;
  };
}
export default interface iAddress {
  city: string;
  country: string;
  postalCode: string;
  streetAddress: string;
}

export default function Contact() {
  const history = useHistory();
  const [restaurantData, setRestaurantData] = useState([]);
  //const [hours, address] = restaurantData;
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const PATH = "restaurantInfo";
  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const collection = await getCollection(path);
      console.log("restaurantData before", collection);
      // @ts-ignore
      setRestaurantData(collection);
      console.log("restaurantdata after", restaurantData);
      console.log("data", collection);
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  // @ts-ignore
  useEffect(() => fetchData(PATH), [fetchData]);
  {
    /*const openingHours = hours.map(
    (item: { label: string; value: string }, index: number) => (
      <li key={index}>
        {item.label}: {item.value}
      </li>
    )
  );
  const fullAddress = address.map(
    (item: { label: string; value: string }, index: number) => (
      <li key={index}>
        {item.label}: {item.value}
      </li>
    )
  );*/
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
          <ul>
            <li>{}</li>
          </ul>

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
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
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
