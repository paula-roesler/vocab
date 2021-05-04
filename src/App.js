import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react'
import { saveToLocal, loadFromLocal } from './lib/localStorage'
import InputFormVocab from './components/InputFormVocab'
import VocabSets from './components/VocabSets'

export default function App() {
	const [languages, setLanguages] = useState([])
	const [error, setError] = useState(null)
	const [vocs, setVocs] = useState(loadFromLocal('vocs') ?? [])

	useEffect(() => {
		saveToLocal('vocs', vocs)
	}, [vocs])

	// PONS API
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
			<VocabSets vocs={vocs} handleDeleteVoc={deleteVoc} />
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
		setVocs([
			{ id: uuidv4(), eng: englishVocabulary, deut: deutscheVokabel },
			...vocs,
		])
	}

	function deleteVoc(currentId) {
		const filteredVocs = vocs.filter((voc) => voc.id !== currentId)
		setVocs(filteredVocs)
		console.log('click')
		console.log(vocs[0].id)
		console.log(currentId)
	}
}

export const Header = styled.header``
export const AppWrapper = styled.div``
