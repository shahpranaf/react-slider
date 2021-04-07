import React from "react";
import { cleanup, fireEvent, render, queryByAttribute } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import Slider from "../components/Slider";

const getById = queryByAttribute.bind(null, 'id');

describe("should move slider to left and right", () => {
	afterEach(cleanup);

	test("should move slider right and left arrow disable", () => {
		const dummyImages = [
			{
				title: "First Block",
				images: [
					"https://placeimg.com/800/600/any?a=1",
					"https://placeimg.com/800/600/any?a=2",
					"https://placeimg.com/800/600/any?a=3",
					"https://placeimg.com/800/600/any?a=4",
				],
			},
			{
				title: "Second Block",
				images: [
					"https://placeimg.com/800/600/any?a=9",
					"https://placeimg.com/800/600/any?a=10",
					"https://placeimg.com/800/600/any?a=11",
					"https://placeimg.com/800/600/any?a=12",
				],
			}
		];

		const { queryByTestId, container } = render(<Slider slides={dummyImages} />);
        const leftArrow = queryByTestId("left-arrow");
        const rightArrow = queryByTestId("right-arrow");

        expect(leftArrow).toBeTruthy();
        expect(leftArrow).not.toHaveClass('disable-arrow') // left arrow should be disabled on first slide section
        UserEvent.click(leftArrow);

        const firstSlide = getById(container,'slide00') // Should be visible
        const lastSlide = getById(container,'slide13') // Should not be visible
        
        expect(firstSlide).not.toHaveClass('disable')
        expect(lastSlide).toHaveClass('disable')
        
     
        UserEvent.click(rightArrow);
        expect(leftArrow).not.toHaveClass('disable-arrow')  // left arrow should be enabled
        expect(rightArrow).not.toHaveClass('disable-arrow') // right arrow should be disabled at last slide
        
        expect(firstSlide).toHaveClass('disable')
        expect(lastSlide).not.toHaveClass('disable')
	});

});
