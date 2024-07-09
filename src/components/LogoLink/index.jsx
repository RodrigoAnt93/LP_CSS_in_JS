import P from "prop-types"
import * as Styled from "./styles"
import { Heading } from "../Heading"

export const LogoLink = ({ text, srcImg = "", link }) => {
	return (
		<Heading>
			<Styled.Container>
				{!!srcImg && <img src={srcImg} alt={text} />}
				{!srcImg && text}
			</Styled.Container>
		</Heading>
	)
}
LogoLink.propTypes = {
	children: P.node.isRequired,
}

LogoLink.propTypes = {
	text: P.string.isRequired,
	srcImg: P.string,
	link: P.string.isRequired,
}
