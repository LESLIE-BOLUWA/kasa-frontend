import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carrousel from "./Carrousel"; // adapte si ton chemin change
import "@testing-library/jest-dom";

const IMAGES = [
  "https://example.com/img1.jpg",
  "https://example.com/img2.jpg",
  "https://example.com/img3.jpg",
];

describe("Carrousel", () => {
  test("affiche la première image et le compteur au chargement", () => {
    render(<Carrousel pictures={IMAGES} />);

    const img = screen.getByRole("img", { name: /photo 1/i });
    expect(img).toHaveAttribute("src", IMAGES[0]);
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  test("clique sur 'Suivant' affiche l'image suivante", async () => {
    const user = userEvent.setup();
    render(<Carrousel pictures={IMAGES} />);

    await user.click(screen.getByRole("button", { name: /image suivante/i }));
    const img = screen.getByRole("img", { name: /photo 2/i });
    expect(img).toHaveAttribute("src", IMAGES[1]);
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });

  test("la navigation boucle à la fin", async () => {
    const user = userEvent.setup();
    render(<Carrousel pictures={IMAGES} />);

    await user.click(screen.getByRole("button", { name: /image suivante/i }));
    await user.click(screen.getByRole("button", { name: /image suivante/i }));
    await user.click(screen.getByRole("button", { name: /image suivante/i }));

    const img = screen.getByRole("img", { name: /photo 1/i });
    expect(img).toHaveAttribute("src", IMAGES[0]);
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  test("affiche l'image précédente lorsque l'on clique sur 'Précédent'", async () => {
    const user = userEvent.setup();
    render(<Carrousel pictures={IMAGES} />);

    await user.click(screen.getByRole("button", { name: /image précédente/i }));
    const img = screen.getByRole("img", { name: /photo 3/i });
    expect(img).toHaveAttribute("src", IMAGES[2]);
    expect(screen.getByText("3 / 3")).toBeInTheDocument();
  });

  test("ne montre pas les boutons s'il y a une seule image", () => {
    render(<Carrousel pictures={[IMAGES[0]]} />);
    expect(
      screen.queryByRole("button", { name: /image suivante/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /image précédente/i })
    ).not.toBeInTheDocument();
  });
});
