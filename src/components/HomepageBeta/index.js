import React from "react";
import styles from "./index.module.css";

export default function beta() {
  return (
    <div className={styles.beta}>
      <h1>CrazyCss is currently in beta version</h1>
      <p>
        To stay updated with latest additions,{" "}
        <a href="https://github.com/ezpieco/crazycss">
          Star CrazyCss on GitHub
        </a>
      </p>
    </div>
  );
}
