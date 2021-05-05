// import styled from 'styled-components/macro'
import Vocab from '../Vocab'

export default function VocabSets({ vocs, handleDeleteVoc }) {
	const vocsList = vocs.sort((a, b) => {
		return a.eng > b.eng
	})

	return (
		<>
			{vocsList.map(({ eng, deut, id }) => (
				<Vocab
					id={id}
					key={id}
					eng={eng}
					deut={deut}
					onDeleteVoc={handleDeleteVoc}
				/>
			))}
		</>
	)
}
