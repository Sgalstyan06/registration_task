import "./MainValues.css";

import { Translate } from "react-translated";

import calendar_icon from "../../images/icons/calendar_icon.png";
import message_icon from "../../images/icons/message_icon.png";
import user_icon from "../../images/icons/user_icon.png";
import search_icon from "../../images/icons/search_icon.png";

const mainValuesItems = [
  {
    img: message_icon,
    text: "main_values_description_1",
    alt: "message",
  },
  {
    img: user_icon,
    text: "main_values_description_2",
    alt: "user",
  },
  {
    img: search_icon,
    text: "main_values_description_3",
    alt: "search",
  },
  {
    img: calendar_icon,
    text: "main_values_description_4",
    alt: "calendar",
  },
];

export default function MainValues() {
  return (
    <section>
      {mainValuesItems.map(({ img, text, alt }) => {
        return (
          <div key={img} className="main-values">
            <img src={img} alt={alt} />
            <p>
              <Translate text={text} />
            </p>
          </div>
        );
      })}
    </section>
  );
}
