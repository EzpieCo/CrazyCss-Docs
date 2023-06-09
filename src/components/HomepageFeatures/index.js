import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    description: <>Self explanatory classes, easy to remember and use.</>,
  },
  {
    title: "Focus on What Matters",
    description: (
      <>
        Focus on your main code not on the design. With CrazyCss you just have
        to add classes to make a simple UI component.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--12")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
