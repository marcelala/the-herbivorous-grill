// NPM packages
import { FormEvent } from "react";

// Project files
import Placeholder from "assets/images/heroImg.png";
import { uploadImage } from "../scripts/uploadImage";

// Interface
interface iProps {
  filename: string;
  name: string;
  state: [getter: string, setter: Function];
}

export default function InputImage({ name, state, filename }: iProps) {
  const [getter, setter] = state;

  // Properties
  const Image = getter === "" ? Placeholder : getter;

  // Methods
  async function onEvent(event: FormEvent, filename: string) {
    const imageURL = await uploadImage(event, filename);

    setter(imageURL);
  }

  return (
    <fieldset className="input-image">
      <b>{name}:</b>
      <label className="custom-file-chooser">
        <input onChange={(event) => onEvent(event, filename)} type="file" />
        <img src={Image} alt="User generated content" />
      </label>
    </fieldset>
  );
}
