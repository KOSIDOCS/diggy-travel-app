import React from 'react'
import styled, { css } from "styled-components"

const CustomChoice = ({ label, img, highlight, click }) => {
    return (
        <Wrapper highlight={highlight} onClick={click}>
            {img && <Icon src={img} />}
            <ChoiceTitle>{label}</ChoiceTitle>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #EFEFEF;
  border-radius: 50px;
  color: black;
  margin: 0.5em 0em;
  cursor: pointer;
  border: none;
  outline: none;
  height: 55px;
  width: max-content;
  padding: 0 50px;

  ${props => props.highlight === "secondary" && css`
     background: linear-gradient(45deg, #4734E1 30%, #8E27EA 90%);
     color: white;
     transition: all 0.2s ease-in-out;
  `}
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0 10px 0 0;
  object-fit: contain;
`;

const ChoiceTitle = styled.span`
 font-size: 1rem;
`;

export default CustomChoice
