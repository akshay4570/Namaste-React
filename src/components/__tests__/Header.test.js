import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Contact from "../Contact";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component Render", () => {
	it("should contain cart with 0 items", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		const cartItems = screen.getByText(/Cart/);
		expect(cartItems).toBeTruthy();
	});

	it("should render the company logo", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		const logo = screen.getByRole("img");
		expect(logo).toBeInTheDocument();
	});

	it("should render the Contact Us page on Click", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		const headerPage = screen.getByText(/Contact/);
		fireEvent.click(headerPage);
		render(<Contact />);
		const contactPage = screen.getAllByRole("textbox");
		expect(contactPage.length).toBe(2);
	});
});
