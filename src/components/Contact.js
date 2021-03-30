import React from "react";
import "./Contact.css";

const name = "Peter Parker";

const avatar =
  "https://geeko.lesoir.be/wp-content/uploads/sites/58/2018/05/Peter-Parker-1068x559.png";

const isOnline = true;

function Contact() {
  return (
    <div class="Contact">
      <img src={avatar} class="avatar" alt="" />

      <div class="container">
        <h3 class="name">{name}</h3>
        <div class="status">
          <div class={isOnline ? "status-online" : "status-offline"}> </div>
          <p class="status-text">{isOnline ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
