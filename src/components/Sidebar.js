import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Input from "./Input";
const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} />
        <h3>Eli <span>Codes</span></h3>
      </LogoWrapper>
      <Form>
        <h3>Sign up</h3>
        <Input 
        placeholder="Fullname"
        />
        <Input 
        type="email"
        placeholder="Email"
        />
        <Input
        type="password" 
        placeholder="Password"
        />
        <Input 
        type="password"
        placeholder="Confirm Password"
        />
        <button>Sign Up</button>
      </Form>
    </Container>
  );
};

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
h3{
  color: #666666;
  margin-bottom: 2rem;
}

button{
  width: 75%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 1rem 0;
  border-radius: 11px;
  background-color: #70EDB9;
  color: #fff;
  font-weight: 600;
  cursor: pointer
  trasition: all 0.2s ease-in-out;

  &:hover{
      transform: translateY(-3px)
  }
}
`

const LogoWrapper = styled.div`
img{
  height: 6rem;
}
h3{
  text-align: center;
  color: #ff8d8d;
  font-size: 22px;
}

span{
  color: #5dc399;
  font-weight: 300;
  font-size: 18px;
}
`;

const Container = styled.div`
  min-width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 900px){
    width: 100w;
    position: absolute;
    padding: 0;
  }
`;

export default Sidebar;
