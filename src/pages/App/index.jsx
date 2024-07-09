import * as Styled from "./styles"

import { Heading } from "../../components/Heading"
import { TextComponent } from "../../components/TextComponent"
import { NavLinks } from "../../components/NavLinks"
import mock from "../../components/NavLinks/mock"
import { LogoLink } from "../../components/LogoLink"

function App() {
	return (
		<div className={"App"}>
			<Styled.Wrapper>
				<LogoLink
					text="Logo"
					link="https://google.com"
					srcImg="https://seeklogo.com/images/B/boston-celtics-logo-227D463A8F-seeklogo.com.png"
				/>
				<NavLinks links={mock} />
				<Heading size="huge" uppercase={true} as="h5" colorDark={true}>
					Rodrigo Antonio
				</Heading>
				<TextComponent>Santa Cruz</TextComponent>
			</Styled.Wrapper>
		</div>
	)
}

export default App
