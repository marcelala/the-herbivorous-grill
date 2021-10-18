import React, { useState } from "react";
// project files
import { bookingFields } from "../../data/bookingFields.js";
import Input from "../../components/Input";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nrPeople, setNrPeople] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  return (
    <form>
      <div className="fields">
        <Input hook={[name, setName]} settings={bookingFields.name} />
        <Input hook={[email, setEmail]} settings={bookingFields.email} />
        <Input hook={[phone, setPhone]} settings={bookingFields.phone} />
        <Input
          hook={[nrPeople, setNrPeople]}
          settings={bookingFields.nrPeople}
        />
        <Input hook={[time, setTime]} settings={bookingFields.time} />
        <Input hook={[date, setDate]} settings={bookingFields.date} />
      </div>
    </form>
  );
}
