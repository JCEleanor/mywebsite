import React from 'react';
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
} from './ContactElements';

const ContactFrom = () => {
	return (
		<Container>
			<FormWrap>
				<Icon to="/">Home</Icon>
				<FormContent>
					<Form action="#">
						<FormH1>Leave a message</FormH1>
						<FromLabel htmlFor="for">Your Email</FromLabel>
						<FromInput type="email" required />

						<FromLabel htmlFor="for">Name</FromLabel>
						<FromInput type="text" required />

						<FromLabel htmlFor="for">Message</FromLabel>
						<FromTextArea type="text" required />
						<FormButton>Send Email</FormButton>
					</Form>
				</FormContent>
			</FormWrap>
		</Container>
	);
};

export default ContactFrom;
