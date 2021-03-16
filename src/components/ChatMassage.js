import React from 'react';
import styled from "styled-components"

function ChatMassage({text, name, image, timestamp}) {
   return (
      <Container>
         <UserAvater>
            <img src={image} alt="" />
         </UserAvater>
         <MassageContent>
            <Name >
               {name}               
               <span> {new Date(timestamp.toDate()).toUTCString()}</span> 
               {/* <span> {new Date(timestamp.toDate())}</span> */}
            </Name>
            <Text >
               {text}
            </Text>

         </MassageContent>
      </Container>
   )
}

export default ChatMassage

const Container = styled.div`
// background: #e0a435;

padding: 8px 20px;
display: flex;

`
const UserAvater = styled.div`
width: 36px;
height: 36px;
border-radius: 2px;
overflow: hidden;
margin-right: 8px;

img{
   width: 100%;
   

}
`

const MassageContent = styled.div`
display: flex;
flex-direction:column
`
const Name = styled.span`
font-weight:900;
font-size: 15px;
line-height:1.4;
 


span{
   font-weight:400;
   color: #8c8c8c;
   margin-left: 8px;
   font-size: 13px;
}


`
const Text = styled.span``


