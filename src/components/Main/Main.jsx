import "./Main.css";

import background from "../../images/background.png";

import Form from "../Form/Form";
import MainValues from "../MainValues/MainValues";

export default function Main() {
  return (
    <main
      style={{ backgroundImage: `url(${background})` }}
    >
      <Form />
      <MainValues />
    </main>
  );
}
