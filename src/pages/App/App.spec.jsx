/* eslint-disable no-undef */
import { render } from "@testing-library/react"
import Home from "./index"
describe("Jest", () => {
	it("should work", () => {
		expect(1).toBe(1)
	})
	it("should display elements", () => {
		render(<Home />)
	})
})
