/* eslint-disable no-undef */
import { screen } from "@testing-library/react"
import { renderTheme } from "../../styles/render-theme"
import App from "./index"
import { theme } from "../../styles/theme"

describe("<App />", () => {
	it("should render App", () => {
		renderTheme(<App />)
	})
})
