import styled from 'styled-components/macro'

export default function VocabSets({ vocs }, index) {
	return (
		<VocabSetsWrapper>
			{vocs.map((voc) => (
				<>
					<div>{voc.eng}</div>
					<div>{voc.deut}</div>
				</>
			))}
		</VocabSetsWrapper>
	)
}

export const VocabSetsWrapper = styled.div``
