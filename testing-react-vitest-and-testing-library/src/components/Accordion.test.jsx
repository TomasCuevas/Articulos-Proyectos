import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

//* COMPONENT TO TEST
import { Accordion } from "./Accordion";

describe("Testing sobre el componente Accordion.jsx", () => {
  beforeEach(() => {
    render(
      <Accordion title="Más información">
        <p>
          Duis velit pariatur labore reprehenderit velit nisi nostrud laboris
          proident eu veniam sit in.
        </p>
      </Accordion>
    );
  });

  test("Debe mostrar el título todo el tiempo.", () => {
    expect(screen.getByText("Más información")).toBeDefined();
  });

  test("Debe mostrar el contenido cuando el acordeón es cliqueado", () => {
    const accordion = screen.getByRole("accordion");
    fireEvent.click(accordion);

    const accordionContent = screen.queryByRole("content");
    expect(accordionContent).toBeTruthy();
  });

  test("Debe ocultar el contenido cuando se haga clic en el acordeón cuando este ya ha sido cliqueado previamente", () => {
    const accordion = screen.getByRole("accordion");

    fireEvent.click(accordion);
    fireEvent.click(accordion);

    const accordionContent = screen.queryByRole("content");
    expect(accordionContent).toBeNull();
  });
});
