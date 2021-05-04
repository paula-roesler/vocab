// import styled from 'styled-components/macro'
import Vocab from '../Vocab'

export default function VocabSets({ vocs, handleDeleteVoc }) {
	return (
		<>
			{vocs.map(({ eng, deut, id }) => (
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
