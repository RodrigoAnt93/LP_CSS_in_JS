/* eslint-disable no-undef */
import mock from "../../components/NavLinks/mock"
import { screen } from "@testing-library/react"
import { renderTheme } from "../../styles/render-theme"
import { NavLinks } from "./index"
import { theme } from "../../styles/theme"

describe("<MenuLink />", () => {
	it("should render links", () => {
		renderTheme(<NavLinks links={mock} />)
		expect(screen.getAllByRole("link")).toHaveLength(mock.length)
	})
	it("should render not links", () => {
		renderTheme(<NavLinks />)
		expect(screen.queryAllByText(/links/i)).toHaveLength(0)
	})
})
