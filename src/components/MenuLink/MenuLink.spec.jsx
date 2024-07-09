/* eslint-disable no-undef */
import { screen } from "@testing-library/react"
import { renderTheme } from "../../styles/render-theme"
import { MenuLink } from "./index"
import { theme } from "../../styles/theme"

describe("<MenuLink />", () => {
	it("should render a link", () => {
		renderTheme(<MenuLink link="https://localhost">Texto</MenuLink>)
		expect(screen.getByRole("link", { name: "Texto" })).toHaveAttribute(
			"target",
			"_self",
		)
	})

	it("should render open in a  new tab", () => {
		renderTheme(
			<MenuLink link="https://localhost" newTab={true}>
				Texto
			</MenuLink>,
		)
		expect(screen.getByRole("link", { name: "Texto" })).toHaveAttribute(
			"target",
			"_blank",
		)
	})
})
