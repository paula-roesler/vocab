import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import InputFormVocab from './components/InputFormVocab'
import VocabSets from './components/VocabSets'

export default function App() {
	const [languages, setLanguages] = useState([])
	const [error, setError] = useState(null)
	const [vocs, setVocs] = useState([])

	useEffect(() => {
		getAllVocabulary()
	}, [])

	return (
		<AppWrapper>
			<Header className="App-header">
				<h1>VOCAB</h1>
			</Header>
			{/* <div>{error && <p>{error}</p>}</div>
				<div>Hui: {languages}</div> */}
			<InputFormVocab
				placeholderTextEnglish="Enter your new english vobaulary right here and ..."
				placeholderTextGerman="... die deutsche Übersetzung dazu bitte hier."
				disabledDe={false} // wenn das engl input feld zwei Buchstaben bekommen hat, soll das hier nicht disabled sein ? 'true' : 'false'
				disabledSubmit={false} // wenn in beiden feldern min 2 Buchstaben sind = false
				submitValue="add to stack"
				onAddVoc={addVoc}
			/>
			<VocabSets vocs={vocs} />
		</AppWrapper>
	)

	function getAllVocabulary(
		url = 'https://api.pons.com/v1/dictionaries?language=en'
	) {
		const apiHeader = {
			method: 'GET',
			credentials: 'omit',
			headers: {
				'HTTP-header':
					'X-Secret: c14c6d99f4db49b3bb7890ba02bace8c6bfba7cb03689bd29fbf284095583bb3',
			},
		}
		fetch(url, { apiHeader })
			.then((res) => {
				if (!res.ok) {
					throw Error('Ooops!')
				}
				return res.json()
			})
			.then((data) => {
				setLanguages(data)
			})
			.catch((error) => {
				setError(error.message)
			})
	}

	function addVoc({ englishVocabulary, deutscheVokabel }) {
		setVocs([{ eng: englishVocabulary, deut: deutscheVokabel }, ...vocs])
	}
}

export const Header = styled.header``
export const AppWrapper = styled.div``
