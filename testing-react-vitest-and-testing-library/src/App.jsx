//* components *//
import { Accordion } from "./components/Accordion";

//* styles *//
import Styles from "./app.module.css";

function App() {
  return (
    <section className={Styles.accordions__container}>
      <Accordion title="Más información">
        <p>
          Pariatur incididunt reprehenderit laborum adipisicing enim quis magna
          enim mollit. Fugiat labore enim incididunt dolor non irure labore.
          Quis officia ullamco laborum officia proident voluptate irure fugiat
          exercitation non mollit. Deserunt voluptate ipsum reprehenderit irure
          commodo do ea est ut sit. Labore mollit proident laborum quis non
          pariatur deserunt veniam est aute. Aliquip exercitation sit officia et
          dolor.
        </p>
      </Accordion>
      <Accordion title="Más información">
        <p>
          Voluptate irure eu pariatur nostrud nostrud eu amet incididunt. Et
          sint laborum minim occaecat. Labore non commodo anim ex excepteur ut
          velit do ullamco exercitation ut. Laboris eu dolor Lorem adipisicing.
          Voluptate laboris in fugiat excepteur dolore commodo laborum fugiat
          dolor aute. Fugiat do nostrud quis proident in duis elit est sint enim
          irure pariatur consectetur. Deserunt ex in ad qui exercitation laborum
          ad dolore commodo do eu in et. Tempor culpa occaecat elit duis nisi
          minim fugiat nisi anim labore. Anim commodo aute incididunt ullamco.
        </p>
      </Accordion>
      <Accordion title="Más información">
        <p>
          Dolor officia laborum nulla adipisicing Lorem. Duis sunt duis
          excepteur ea nisi aliqua magna quis. Fugiat labore irure enim amet
          amet laborum veniam quis. Do ex ex et officia eiusmod exercitation
          irure ex minim. Commodo do enim est Lorem aute commodo. Qui eiusmod
          exercitation reprehenderit adipisicing sunt in duis magna dolore sint
          ea dolor. Amet nisi officia irure irure mollit elit aliquip
          consectetur nisi mollit et nisi.Excepteur deserunt eu dolore sint
          reprehenderit commodo consectetur minim est. Exercitation occaecat
          aute cupidatat consectetur officia reprehenderit officia nisi ex sit
          incididunt. Ex proident est eiusmod proident nulla aliquip magna.
        </p>
      </Accordion>
      <Accordion title="Más información">
        <p>
          Dolor officia laborum nulla adipisicing Lorem. Duis sunt duis
          excepteur ea nisi aliqua magna quis. Fugiat labore irure enim amet
          amet laborum veniam quis. Do ex ex et officia eiusmod exercitation
          irure ex minim. Commodo do enim est Lorem aute commodo. Qui eiusmod
          exercitation reprehenderit adipisicing sunt in duis magna dolore sint
          ea dolor. Amet nisi officia irure irure mollit elit aliquip
          consectetur nisi mollit et nisi.Excepteur deserunt eu dolore sint
          reprehenderit commodo consectetur minim est. Exercitation occaecat
          aute cupidatat consectetur officia reprehenderit officia nisi ex sit
          incididunt. Ex proident est eiusmod proident nulla aliquip magna.
        </p>
      </Accordion>
    </section>
  );
}

export default App;
