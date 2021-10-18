// NPM packages
import { FormEvent } from "react";

// Project files
import Placeholder from "assets/images/placeholder.png";
import { uploadImage } from "../scripts/uploadImage";

// Interface
interface iProps {
  onChange: Function;
  state: any;
}

export default function InputImage({ onChange, state }: iProps) {
  // Properties
  const Image = state === "" ? Placeholder : state;

  // Methods
  async function onFileChange(event: FormEvent) {
    const image_url = await uploadImage(event, "profile-image");

    onChange(image_url);
  }

  return (
    <fieldset className="input-image">
      <label className="custom-file-chooser">
        <input onChange={(event) => onFileChange(event)} type="file" />
        <img src={Image} alt="User generated content" />
      </label>
      <small>Add a png picture above</small>
    </fieldset>
  );
}
