import React from 'react'
import styled from 'styled-components';
import Pdf from './resume.pdf';

const Link = styled.a`
    display: inline-block;
    margin-top: 25px;
    &:hover {
		text-decoration: underline;
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