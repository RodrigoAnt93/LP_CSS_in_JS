import * as Styled from "./styles"

import { Heading } from "../../components/Heading"

function App() {
	return (
		<div className={"App"}>
			<Styled.Wrapper>
				<Heading size="huge" uppercase={true} as="h5" colorDark={true}>
					Rodrigo Antonio
				</Heading>
			</Styled.Wrapper>
		</div>
	)
}

export default App
