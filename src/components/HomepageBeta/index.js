import React from "react";
import styles from "./index.module.css";

export default function beta() {
  return (
    <div className={styles.beta}>
      <h1>CrazyCss is in beta version for Now</h1>
      <p>
        To stay updated with latest addition,{" "}
        <a href="https://github.com/ezpieco/crazycss">
          Star CrazyCss in github
        </a>
      </p>
    </div>
  );
}
