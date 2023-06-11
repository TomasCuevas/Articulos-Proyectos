import { useState } from "react";

//* icons *//
import { ArrowDown, ArrowUp } from "./icons";

//* styles *//
import Styles from "./Accordion.module.css";

export const Accordion = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <article
      role="accordion"
      onClick={() => setOpen((prevValue) => !prevValue)}
      className={Styles.accordion__card}
    >
      <div className={Styles.accordion__header}>
        <h3 className={Styles.accordion__title}>{title}</h3>
        {open ? <ArrowUp /> : <ArrowDown />}
      </div>

      {open ? (
        <div role="content" className={Styles.accordion__content}>
          <div className={Styles.accordion__more}>{children}</div>
        </div>
      ) : null}
    </article>
  );
};
