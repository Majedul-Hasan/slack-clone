// import { styled } from '@material-ui/core';
import React, {useState} from 'react';
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput({sendMessage}) {
   const [input, setInput] = useState("")




   const send = (e)=>{
      e.preventDefault();
      if(!input) return;
      sendMessage(input);
      setInput("")
   }



   return (
      <Container>
         <InputContainer>
         <form>
            <input 
            onChange = {(e)=>setInput(e.target.value)}          
             type="text" placeholder="massage here...." />
            <SendButto 
            type='submit'
            value={input}
             onClick= {send}>
               <Send  />

               {/* <SendIcon /> */}

            </SendButto>
         </form>
         </InputContainer>

      </Container>
   )
}


export default ChatInput


const Container = styled.div`padding: 0 20px 20px 24px;`
// const Container = styled.div`
// padding: 0 20px 20px 24px;


// `
const InputContainer = styled.div`
border: 1px solid #8d8d8e;
border-radius: 4px;

form{
   display:flex;
   align-items: center;
   height: 42px;
   padding-left: 10px;

   input{
      flex:1;
      border: none;
      background: transparent;
      font-size: 13px;
      :focus{
         outline: none
      }
}

   }
  

`
const SendButto = styled.button`

background-color: #007a5a;
border-radius: 2px;
width: 32px;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-right: 5px;

.MuiSvgIcon-root{
   width: 20px;
   color: #ededee;
}
:hover{
background-color: #148567;

}
`
const Send = styled(SendIcon)`
// border: 1px solid #8d8d8e ;
// color: #ededee;
`

