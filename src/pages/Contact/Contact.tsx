import { useHistory } from "react-router-dom";

//project files
import { data } from "../../data/restaurantData.js";
import Map from "./Map";
import Button from "../../components/Button";
import BookingForm from "./BookingForm";
import contactImg from "../../assets/images/owner.png";
import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../../scripts/fireStore";

export interface iData {
  id: string;
  value: string;
}

export default function Contact() {
  const history = useHistory();
  const hours = data.openingHours;
  const address = data.addressData;

  const openingHours = hours.map((item: iData) => (
    <li key={item.id}>
      {item.id}: {item.value}
    </li>
  ));
  const fullAddress = address.map((item: iData) => (
    <li key={item.id}>{item.value}</li>
  ));
  return (
    <section id="contact">
      <img src={contactImg} alt="man putting a pizza in wood oven" />
      <div className="text-box-section">
        <h2>Get in</h2>
        <h1>Contact</h1>
        <p>Drop us a line here… we look forward to hearing from you!</p>
      </div>
      <div className="hours">
        <h2 className="oleo">Opening Hours</h2>
        <ul>{openingHours}</ul>
      </div>
      <div className="booking">
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
      </div>
      <div className="address">
        <h2 className="oleo">Address</h2>
        <ul>{fullAddress}</ul>
        <Map
          latitude={59.34055553456532}
          longitude={18.009009253501386}
          zoom={13}
        />
      </div>
      <Button onClick={() => history.goBack()} theme={"secondary"}>
        Go back
      </Button>
    </section>
  );
}
