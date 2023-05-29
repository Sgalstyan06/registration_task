import "./Main.css";

import background from "../../images/background.png";

import Form from "../Form/Form";
import Gallery from "../Gallery/Gallery";

export default function Main() {
  return (
    <main
      style={{ backgroundImage: `url(${background})` }}
    >
      <Form />
      <Gallery />
    </main>
  );
}
