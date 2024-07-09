/* eslint-disable no-undef */
import { screen } from "@testing-library/react"

import { renderTheme } from "../../styles/render-theme"
import { TextComponent } from "."
import { theme } from "../../styles/theme"

describe("<TextComponent />", () => {
	it("should render a text", () => {
		renderTheme(<TextComponent>Texto</TextComponent>)
		const paragraph = screen.getByText("Texto")
	})
})
