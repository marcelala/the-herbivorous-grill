export default interface iInputField {
  settings: {
    autofocus: boolean;
    autocomplete: string;
    placeholder: string;
    type: string;
    name: string;
  };
  hook: [state: string, setState: Function];
}
