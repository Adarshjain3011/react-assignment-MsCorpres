
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // For routing support
import LandingPage from "./LandingPage";
import '@testing-library/jest-dom';



describe("LandingPage Component", () => {
  it("renders the LandingPage component", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId("landing-page")).toBeInTheDocument();
  });

  it("should display the Navbar", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("should display the Hero section", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
  });

  it("should display the Footer", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId("footer-section")).toBeInTheDocument();
  });

  it("should render the Company section", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId("company-section")).toBeInTheDocument();
  });

  it("should navigate to the correct route when clicking the button", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /Get Started/i });
    expect(button).toHaveAttribute("href", "/next-route"); // Ensure button has correct link
  });
});
