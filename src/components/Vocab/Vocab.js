import styled from 'styled-components/macro'
import { useState } from 'react'
import { ReactComponent as Delete } from '../../assets/delete.svg'
import Button from '../Button'

export default function Vocab({ eng, deut, onDeleteVoc, id }) {
	const [isTranslationVisible, setIsTranslationVisible] = useState(false)
	const deleteX = <Delete />

	return (
		<VocabSetsWrapper>
			<VocButton
				onClick={(event) => {
					event.stopPropagation()
					setIsTranslationVisible(!isTranslationVisible)
				}}>
				{eng}
			</VocButton>

			{!isTranslationVisible ? (
				''
			) : (
				<div>
					<TranslateVoc>{deut}</TranslateVoc>
					<DeleteButton onClick={() => onDeleteVoc(id)}>{deleteX}</DeleteButton>
				</div>
			)}
		</VocabSetsWrapper>
	)
}

export const VocabSetsWrapper = styled.div``

export const TranslateVoc = styled.div`
	color: var(--white);
	background-color: var(--secondary);
	border: 2px solid var(--secondary);
	width: 100%;
	height: 40px;
	border-radius: 0 0 4px 4px;
	font-size: 25px;
	text-align: center;
`

export const VocButton = styled(Button)`
	color: var(--secondary);
	background-color: transparent;
	border: 2px solid var(--secondary);
	border-radius: 4px 4px 0 0;
	font-size: 25px;
	padding: 0;
	margin-top: 10px;
`

export const DeleteButton = styled(Button)`
	width: 40px;
	height: 40px;
	background-color: transparent;
	stroke: var(--orangeDark);
	stroke-width: 4;
`
