import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carrousel from "./Carrousel";

const IMAGES = [
  "https://example.com/img1.jpg",
  "https://example.com/img2.jpg",
  "https://example.com/img3.jpg",
];

describe("Carrousel", () => {
  it("affiche la première image et le compteur au démarrage", () => {
    render(<Carrousel pictures={IMAGES} />);

    const wrapper = screen.getByLabelText("Galerie photos du logement");
    expect(wrapper).toHaveStyle(`background-image: url(${IMAGES[0]})`);
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("affiche l'image suivante quand on clique sur 'Suivant'", async () => {
    const user = userEvent.setup();
    render(<Carrousel pictures={IMAGES} />);

    await user.click(screen.getByRole("button", { name: /image suivante/i }));

    const wrapper = screen.getByLabelText("Galerie photos du logement");
    expect(wrapper).toHaveStyle(`background-image: url(${IMAGES[1]})`);
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });

  it("revient à la première image après la dernière", async () => {
    const user = userEvent.setup();
    render(<Carrousel pictures={IMAGES} />);

    // 3 images → il faut cliquer 3 fois pour revenir au début
    await user.click(screen.getByRole("button", { name: /image suivante/i }));
    await user.click(screen.getByRole("button", { name: /image suivante/i }));
    await user.click(screen.getByRole("button", { name: /image suivante/i }));

    const wrapper = screen.getByLabelText("Galerie photos du logement");
    expect(wrapper).toHaveStyle(`background-image: url(${IMAGES[0]})`);
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });
});
