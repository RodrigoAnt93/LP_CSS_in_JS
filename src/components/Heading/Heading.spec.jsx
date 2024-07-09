/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { screen } from "@testing-library/react"

import { renderTheme } from "../../styles/render-theme"
import { Heading } from "."
import { theme } from "../../styles/theme"

describe("<Heading />", () => {
	it("should render with default values", () => {
		renderTheme(<Heading>Texto</Heading>)
		const heading = screen.getByRole("heading", { name: "Texto" })

		expect(heading).toHaveStyle({
			color: theme.colors.primaryColor,
			"font-size": theme.font.sizes.xlarge,
			"text-transform": "none",
		})
	})

	it("should render with white color", () => {
		renderTheme(<Heading colorDark={false}>Texto</Heading>)
		const heading = screen.getByRole("heading", { name: "Texto" })

		expect(heading).toHaveStyle({
			color: theme.colors.white,
		})
	})

	it("should render correct heading sizes", () => {
		renderTheme(<Heading size={"small"}>Texto</Heading>)
		const heading = screen.getByRole("heading", { name: "Texto" })

		expect(heading).toHaveStyle({
			"font-size": theme.font.sizes.medium,
		})
	})

	it("should render correct font-size when mobile", () => {
		renderTheme(<Heading uppercase={true}>Texto</Heading>)
		const heading = screen.getByRole("heading", { name: "Texto" })

		expect(screen.getByRole("heading", { name: "Texto" })).toHaveStyle(
			"font-size",
			theme.font.sizes.xlarge,
			{
				media: theme.media.lteMedium,
			},
		)
	})

	it("should render with uppercase letters", () => {
		renderTheme(<Heading uppercase={true}>Texto</Heading>)
		const heading = screen.getByRole("heading", { name: "Texto" })

		expect(heading).toHaveStyle({
			"text-transform": "uppercase",
		})
	})
})
