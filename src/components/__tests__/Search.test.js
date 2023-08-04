import Body from "../Body";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockBodyData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});

describe("Integration Test for Search Flow", () => {
	it("Should search Restaurant List for Burger Keyword", async () => {
		// Whenever we have a state change or Fetching the data wrap it around act Funtion
		await act(async () =>
			render(
				<BrowserRouter>
					<Body />
				</BrowserRouter>
			)
		);
		const searchBar = screen.getByPlaceholderText("Search by Restaurants");
		expect(searchBar).toBeInTheDocument();

		const cardBeforeSearch = screen.getAllByTestId("resCard");

		expect(cardBeforeSearch.length).toBe(20);
	});

	it("Should search Top Rated Restaurant List", async () => {
		// Whenever we have a state change or Fetching the data wrap it around act Funtion
		await act(async () =>
			render(
				<BrowserRouter>
					<Body />
				</BrowserRouter>
			)
		);
		const topRatedButton = screen.getByRole("button", { name: "Top Rated+" });
		expect(topRatedButton).toBeInTheDocument();

		fireEvent.click(topRatedButton);
		const resCards = screen.getAllByTestId("resCard");

		expect(resCards.length).toBe(18);
	});
});
