import styled from 'styled-components/macro'

export default styled.button`
	background-color: var(--orangeDark);
	color: var(--white);
	width: 100%;
	height: 40px;
	border: none;
	border-radius: 4px;
	margin: 0 auto;
	padding: 9px 10px 10px;
	font-family: inherit;
	font-size: 18px;
	text-decoration: none;
	text-align: center;
	outline: none !important;

	&:disabled {
		background-color: var(--orangeDisabeld);
	}
`
