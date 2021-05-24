import React from 'react'
import {
	Container,
	FormContent,
	Form,
	FormH1,
	FormWrap,
	FromInput,
	FromLabel,
	FromTextArea,
	FormButton,
	Icon
} from './ContactElements'

class ContactFrom extends React.Component {
	handleSubmit(e) {
		e.preventDefault()
		const scriptURL =
			'https://script.google.com/macros/s/AKfycbyaGFu5uKs7ypMuFWCFDUBE9GTxR-cPOfFHzpkOZDXNKCnjnqNsC8em0Y131FztzOTH/exec'
		const form = document.querySelector('form')
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then((response) => {
				console.log('Success!', response)
				alert("Thank you, I've received your message.")
				window.location.href = 'https://jceleanor.github.io/mywebsite/'
			})
			.catch((error) => {
				console.error('Error!', error.message)
				alert('Oops, something went wrong, please try again')
			})
	}

	render() {
		return (
			<Container>
				<FormWrap>
					<Icon to="/">Home</Icon>
					<FormContent>
						<Form action="#" onSubmit={this.handleSubmit}>
							<FormH1>Leave a message</FormH1>
							<FromLabel htmlfor="email">Your Email</FromLabel>
							<FromInput type="email" name="email" required />

							<FromLabel htmlFor="name">Name</FromLabel>
							<FromInput type="text" name="name" required />

							<FromLabel htmlFor="msg">Message</FromLabel>
							<FromTextArea type="text" name="msg" required />
							<FormButton>Send Email</FormButton>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		)
	}
}

// const ContactFrom = () => {
// 	return (
// 		<Container>
// 			<FormWrap>
// 				<Icon to="/">Home</Icon>
// 				<FormContent>
// 					<Form action="#" onSubmit={this.handleSubmit}>
// 						<FormH1>Leave a message</FormH1>
// 						<FromLabel htmlFor="for">Your Email</FromLabel>
// 						<FromInput type="email" required />

// 						<FromLabel htmlFor="for">Name</FromLabel>
// 						<FromInput type="text" required />

// 						<FromLabel htmlFor="for">Message</FromLabel>
// 						<FromTextArea type="text" required />
// 						<FormButton>Send Email</FormButton>
// 					</Form>
// 				</FormContent>
// 			</FormWrap>
// 		</Container>
// 	)
// }

export default ContactFrom
