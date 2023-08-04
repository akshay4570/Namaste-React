import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
	it("should load heading component", () => {
		render(<Contact />);

		const heading = screen.getByRole("heading");

		// Assertion
		expect(heading).toBeInTheDocument();
	});

	it("should load button component", () => {
		render(<Contact />);

		const button = screen.getByRole("button");

		// Assertion
		expect(button).toBeInTheDocument();
	});
});
