import Restaurant, { withRestaurantPromoted } from "../Restaurant";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestData.json";

describe("Restaurant Menu Page Test", () => {
	it("should load the Restaurant page with props", () => {
		render(<Restaurant resData={MOCK_DATA} />);

		const restName = screen.getByText("Burger King");

		expect(restName).toBeInTheDocument();
	});

	it("should rended RestaurantWithPromoted HOC", () => {
		const RestaurantWithPromoted = withRestaurantPromoted(Restaurant);
		render(<RestaurantWithPromoted resData={MOCK_DATA} />);

		const restPromotedLabel = screen.getByText("PROMOTED");

		expect(restPromotedLabel).toBeInTheDocument();
	});
});
