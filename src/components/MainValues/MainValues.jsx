import "./MainValues.css";

import calendar_icon from "../../images/icons/calendar_icon.png";
import message_icon from "../../images/icons/message_icon.png";
import user_icon from "../../images/icons/user_icon.png";
import search_icon from "../../images/icons/search_icon.png";

const mainValuesItems = [
  {
    img: message_icon,
    text: "Exchange meaningful conversation",
    alt: "message",
  },
  {
    img: user_icon,
    text: "Singles revealing their true self through detailed profiles",
    alt: "user",
  },
  { img: search_icon, text: "A powerful search tool with detailed filtration", alt: "search" },
  {
    img: calendar_icon,
    text: "Themed events that create exciting dating occasions",
    alt: "calendar"
  },
];

export default function MainValues() {
  
  return (
    <section>
      {mainValuesItems.map(({ img, text, alt }) => {
        return (
          <div key={img} className="main-values">
            <img src={img} alt={alt} />
            <p>{text}</p>
          </div>
        );
      })}
    </section>
  );
}
