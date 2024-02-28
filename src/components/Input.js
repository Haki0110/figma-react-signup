import React from 'react'
import styled from "styled-components";
const input = ({type, placeholder}) => {
  return (
    <Container>
        <StyledInput 
        type={type ? type : "text"} 
        placeholder={placeholder && placeholder}
        required
        autocomplete = "off"
        />
        <Status />
    </Container>
  )
}

const StyledInput = styled.input`
width: 88%;
max-width: 350px;
min-width: 250px;
height: 40px;
border: none;
margin: 0.5rem 0;
background-color: #f5f5f5;
box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
border-radius: 11px;
padding: 0 1rem;
trasition: all 0.2s ease-in-out;

&:hover{
    transform: translateY(-3px)
}
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Status = styled.div`
height: 10px;
width: 10px;
background: #9d9d9d;
border-radius: 10px;
margin-left: 1rem;

${StyledInput}:focus + &{
    background: #FFA689;
}

${StyledInput}:invalid + &{
    background: #FE2F75;
}

${StyledInput}:valid + &{
    background: #70EDB9;
}
`
export default input