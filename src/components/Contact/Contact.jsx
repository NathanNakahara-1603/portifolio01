import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contato</h2>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nathannakahara@gmail.com">nathannakahara@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nathan-nakahara-5b316014a/">linkedin.com/NathanNakahara</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/NathanNakahara-1603">github.com/NathanNakahara</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/tel.png")} alt="Telefone icon" />
          <a href="https://wa.me/5511987193233">11 98719-3233</a>
        </li>
      </ul>
    </footer>
  );
};
