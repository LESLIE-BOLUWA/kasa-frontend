import { render, screen } from "@testing-library/react";
import Banner from "../components/Banner";
import "@testing-library/jest-dom";

describe("Composant Banner", () => {
  test("rend la bannière avec une image en background", () => {
    const imageUrl = "/test-image.jpg";
    render(<Banner image={imageUrl} />);
    const banner =
      screen.getByRole("banner", { hidden: true }) ||
      screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  test("affiche le titre lorsqu'il est fourni", () => {
    render(<Banner image="/test.jpg" title="Bienvenue sur Kasa" />);
    const title = screen.getByText("Bienvenue sur Kasa");
    expect(title).toBeInTheDocument();
  });

  test("n'affiche pas de titre si aucune prop title n'est donnée", () => {
    render(<Banner image="/test.jpg" />);
    const title = screen.queryByRole("heading");
    expect(title).toBeNull();
  });
});
