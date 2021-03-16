import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header({user, signOut }) {
console.log(user);
console.log(user.userName);


   return (
      <Container>
        <Main>
           <AccessTimeIcon/>
           <SearchContainer>
              <Search>
                 <input type="text" placeholder="Search" />
              </Search>
           </SearchContainer>


           <HelpOutlineIcon/>

        </Main>
        <UserContainer>
           <Name>
              {user.name}
              
           </Name>
           <UserImage onClick={signOut}>
              <img className="userImage" src={ user.photo ? user.photo : "https//i.imgur.com/6VBx3io.png "}   alt="user"/>
           </UserImage>

        </UserContainer>
      </Container>
   )
}

export default Header

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
background:#350d36;
color #f0f0f0f0;
position:relative;
box-shadow: 0 1px 0 0 rgba(255, 255, 255, .12 );
// z-index:10;




`
const Main = styled.div`
   display:flex;
   margin-left: 16px;
   margin-right: 16px;


`
const SearchContainer = styled.div`
min-width: 400px;
display:  flex;
align-items: center;
margin-left: 16px;
margin-right: 16px;

`
const Search = styled.div`
width: 100%;
box-shadow: inset 0 0 0 1px rgb(104 74 104);
border-radius: 6px;
display:  flex;
align-items: center;
justify-content: flex-start;


input{
   background-color: transparent;
   border:none;
   padding-left: 8px;
    outline:none;
   padding-right: 8px;
   color: #fff;
   width: 100%;
   font-size: 1.2rem;
}
input:focus{
   
   outline:none;
}
`
const UserContainer = styled.div`
display:flex;
align-items: center;
padding-right: 16px;
position:absolute;
right:0;


`
const Name = styled.div`
padding-right: 16px;



`
const UserImage = styled.div`
width: 28px;
height: 28px;
border: solid #fafa 2px;
background: red;
border-radius: 3px;
cursor:pointer;


img{
   width: 100%;
}
`