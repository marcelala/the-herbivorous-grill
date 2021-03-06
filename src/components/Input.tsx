// Inteface
import iInputField from "../types/iInputField";

export default function Input({ hook, settings }: iInputField) {
  const { autofocus, autocomplete, name, placeholder, type, label } = settings;
  const [state, setState] = hook;

  return (
    <label>
      {label}
      <input
        autoFocus={autofocus}
        autoComplete={autocomplete}
        onChange={(event) => setState(event.target.value)}
        className={name}
        placeholder={placeholder}
        type={type}
        value={state}
        required
        maxLength={80}
      />
    </label>
  );
}
