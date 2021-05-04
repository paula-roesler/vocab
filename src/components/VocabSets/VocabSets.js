import styled from 'styled-components/macro'
import { ReactComponent as Delete } from '../../assets/delete.svg'
import Button from '../Button'

export default function VocabSets({ vocs, onDeleteVoc, id }) {
	const deleteX = <Delete />
	return (
		<>
			{vocs.map((voc, vocIndex) => (
				<VocabSetsWrapper id={voc.id} key={vocIndex}>
					<div>{voc.eng}</div>
					<div>{voc.deut}</div>
					<DeleteButton onClick={() => onDeleteVoc(voc.id)}>
						{deleteX}
					</DeleteButton>
				</VocabSetsWrapper>
			))}
		</>
	)
}

export const VocabSetsWrapper = styled.div``

export const DeleteButton = styled(Button)`
	width: 40px;
	height: 40px;
	background-color: transparent;
	stroke: var(--orangeDark);
	stroke-width: 4;
`
