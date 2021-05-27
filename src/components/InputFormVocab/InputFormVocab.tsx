import styled from 'styled-components/macro'

type InputFormVocabProps = {
	placeholderTextEnglish: string
	placeholderTextGerman: string
	disabledEn: any
	disabledDe: any
	disabledSubmit: any
	submitValue: any
	onAddVoc: any
}

export default function InputFormVocab({
	placeholderTextEnglish,
	placeholderTextGerman,
	disabledEn,
	disabledDe,
	disabledSubmit,
	submitValue,
	onAddVoc,
}: InputFormVocabProps) {
	return (
		<>
			<InputForm onSubmit={handleSubmit}>
				<label>
					<Headline>Let your vocabulary stack grow!</Headline>
					<InputVocab
						title="addEnglishVocab"
						name="inputEn"
						placeholder={placeholderTextEnglish}
						type="text"
						maxLength="40"
						minLength="2"
						required
						disabled={disabledEn}
						autoFocus={true}></InputVocab>
					<InputVocab
						title="addGermanVocab"
						name="inputDe"
						placeholder={placeholderTextGerman}
						maxLength="40"
						minLength="2"
						required
						disabled={disabledDe}></InputVocab>
					<InputVocabSubmit
						type="submit"
						value={submitValue}
						disabled={disabledSubmit}></InputVocabSubmit>
				</label>
			</InputForm>
		</>
	)

	function handleSubmit(event) {
		event.preventDefault()
		const form = event.target
		const newVocs = form.elements
		console.log('click')

		onAddVoc({
			englishVocabulary: newVocs.inputEn.value,
			deutscheVokabel: newVocs.inputDe.value,
		})
		form.reset()
		newVocs.inputEn.focus()
		console.log(newVocs)
	}
}

export const InputForm = styled.form``
export const Headline = styled.h4`
	margin-bottom: 10px;
`
export const InputVocab = styled.input`
	color: ${(props) =>
		props.disabled ? 'var(--orangeDisabeld)' : 'var(--orangeDark)'};
	border: var(--border-width) solid
		${(props) =>
			props.disabled ? 'var(--orangeDisabled)' : 'var(--orangeDark)'};

	::placeholder {
		color: ${(props) =>
			props.disabled ? 'var(--orangeDisabeld)' : 'var(--orangeDark)'};
	}
`
export const InputVocabSubmit = styled.input`
	border-radius: 4px;
	background-color: ${(props) =>
		props.disabled ? 'var(--orangeDisabeld)' : 'var(--orangeDark)'};
	color: ${(props) => (props.disabled ? 'var(--white)' : 'var(--white)')};
	border: var(--border-width) solid
		${(props) =>
			props.disabled ? 'var(--orangeDisabled)' : 'var(--orangeDark)'};

	&input::invalid {
		color: green;
	}

	::placeholder {
		color: ${(props) =>
			props.disabled ? 'var(--orangeDisabeld)' : 'var(--orangeDark)'};
	}
`
