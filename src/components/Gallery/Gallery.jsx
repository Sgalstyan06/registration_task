import React from "react";
import './Gallery.css'
import calendar_icon from "../../images/icons/calendar_icon.png";
import message_icon from "../../images/icons/message_icon.png";
import user_icon from "../../images/icons/user_icon.png";
import search_icon from "../../images/icons/search_icon.png";

const galleryItems = [
  { img: message_icon, text: "Exchange meaningful conversation" },
  {
    img: user_icon,
    text: "Singles revealing their true self through detailed profiles",
  },
  { img: search_icon, text: "A powerful search tool with detailed filtration" },
  {
    img: calendar_icon,
    text: "Themed events that create exciting dating occasions",
  },
];

export default function Gallery() {
  return (
    <section>
      {galleryItems.map(({ img, text }) => {
        return (
          <div key={img} className="gallery">
            <img src={img} alt="text" />
            <p>{text}</p>
          </div>
        );
      })}
    </section>
  );
}
