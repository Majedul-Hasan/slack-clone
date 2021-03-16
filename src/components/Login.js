// import { AlarmTwoTone } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import {auth, provider} from "../firebase";


function Login(props) {

   const signin = ()=>{
      auth.signInWithPopup(provider)
      .then((result)=>{
         // console.log(result.user);
         const newUser={
         name: result.user.displayName,
         photo: result.user.photoURL
         }
console.log(newUser);
      // setter
      localStorage.setItem('user', JSON.stringify(newUser));
      props.setUser(newUser);
      })
      .catch((error)=>{
         alert(error.message)
      })
   }
   return (
      <Container>
         <Content>
            <SlackLogo  src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" />
            <h1>Sign in  Slack</h1>
            <SignInButton onClick={()=>signin()}>
               Sign in With Google
            </SignInButton>

           
         </Content>
      </Container>
   )
}

export default Login

const Container = styled.div`
   height: 100vh;
   width: 100%;
   background-color: #f8f8f8f;
   display:flex;
   align-items: center;
   justify-content: center;


`
const Content = styled.div`
   background-color: #ffff;
   padding:100px;
   border-radius: 10px;
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%) ;

`

const SlackLogo = styled.img`
   height: 100px;
   // weight: 100px;

`
const SignInButton = styled.button`
   background-color:#2eb67d;
   margin-top: 50px;
   border: none;
   height: 40px;
   border-radius: 5px;
   color: #fff;
   cursor: pointer;
   font-size: 15px;
   padding: 3px 15px;


   :focus{
   outline: none;
   
}
`
