import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
	min-height: 692px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	z-index: 0;
	overflow: hidden;
	background: #e6dec1;
`

export const FormWrap = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
`

export const Icon = styled(Link)`
	width: fit-content;
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    font-weight: 700;
    font-size: 32px;
	position: relative;
	z-index: 2;
	color:#425F7A;
	text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    transition: text-decoration-color 500ms;

	&:hover {
		text-decoration-color: rgba(0, 0, 0, 1);
	}

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`

export const Form = styled.form`
	background: rgba(232, 226, 198, 0.4);
	max-width: 400px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 80px 32px;
	border-radius: 4px;
	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`

export const FormH1 = styled.h1`
	margin-bottom: 40px;
	color: #060606;
	font-size: 20px;
	font-weight: 400;
	text-align: center;
`

export const FromLabel = styled.label`
	margin-bottom: 8px;
	font-size: 14px;
	color: #060606;
`

export const FromInput = styled.input`
	padding: 16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
`

export const FormButton = styled.button`
	background: #fff;
	padding: 16px 0;
	border: none;
	border-radius: 4px;
	color: #060606;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		box-shadow: 3px 3px #949494;
		transition: all 0.2s ease-in;
	}

	&:active {
		background: rgba(256, 256, 256, 0.5);
		transition: all 0.2s ease-in;
	}
`

export const FromTextArea = styled.textarea`
	height: 100px;
	padding: 16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
`

export const Text = styled.span`
	text-align: center;
	margin-top: 24px;
	color: #fff;
	font-size: 14px;
`
