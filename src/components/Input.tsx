// Inteface
interface iProps {
  settings: any;
  hook: any;
}
export default function Input({ hook, settings }: iProps) {
  const { autofocus, autocomplete, name, placeholder, type } = settings;
  const [state, setState] = hook;

  return (
    <label>
      <input
        autoFocus={autofocus}
        autoComplete={autocomplete}
        onChange={(event) => setState(event.target.value)}
        className={name}
        placeholder={placeholder}
        type={type}
        value={state}
        required
      />
    </label>
  );
}
