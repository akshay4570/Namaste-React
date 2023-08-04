import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/mockMenuData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(MOCK_DATA),
	})
);
describe("Integration Testing for Cart Update", () => {
	it("Should Load Restaurant Menu Component", async () => {
		await act(async () =>
			render(
				<BrowserRouter>
					<Provider store={appStore}>
						<RestaurantMenu />
					</Provider>
				</BrowserRouter>
			)
		);

		const loadedData = screen.getByText(/Recommended/);
		expect(loadedData).toBeInTheDocument();
	});

	it("Should Load Accordian Data when clicked on Accordian header", async () => {
		await act(async () =>
			render(
				<BrowserRouter>
					<Provider store={appStore}>
						<RestaurantMenu />
					</Provider>
				</BrowserRouter>
			)
		);

		const loadedData = screen.getByText(/Recommended/);

		fireEvent.click(loadedData);

		const menuItem = screen.getAllByTestId("menuCard");
		expect(menuItem.length).not.toBe(0);
	});

	it("Should Update Cart Data when clicked on Add Button", async () => {
		await act(async () =>
			render(
				<BrowserRouter>
					<Provider store={appStore}>
						<Header />
						<RestaurantMenu />
					</Provider>
				</BrowserRouter>
			)
		);

		const loadedData = screen.getByText(/Recommended/);

		fireEvent.click(loadedData);

		const cartDetailsBefore = screen.getByText("Cart - (0)");
		expect(cartDetailsBefore).toBeInTheDocument();

		const addButtons = screen.getAllByRole("button", { name: "Add +" });

		fireEvent.click(addButtons[0]);

		const cartDetailsAfter = screen.getByText("Cart - (1)");
		expect(cartDetailsAfter).toBeInTheDocument();
	});

	it("Cart should have menu Items populated", async () => {
		await act(async () =>
			render(
				<BrowserRouter>
					<Provider store={appStore}>
						<Header />
						<RestaurantMenu />
						<Cart />
					</Provider>
				</BrowserRouter>
			)
		);

		const cartDetailsAfter = screen.getByText("Cart - (1)");
		expect(cartDetailsAfter).toBeInTheDocument();

		fireEvent.click(cartDetailsAfter);

		const menuItem = screen.getAllByTestId("menuCard");
		expect(menuItem.length).not.toBe(0);
	});
});
