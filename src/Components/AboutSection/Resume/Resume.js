import React from 'react'
import styled from 'styled-components';
import Pdf from './resume.pdf';

const Link = styled.a`
    display: inline-block;
    margin-top: 15px;
    margin-left: 10px;
    &:hover {
		text-decoration: underline;
	}
    @media screen and (max-width: 992px) {
		margin-top: 10px;
	}
`

const Resume = () => {
    return (
        <div>
            <Link href = {Pdf} target = "_blank" rel="noreferrer">Download resume</Link>
        </div>
        );
}

export default Resume