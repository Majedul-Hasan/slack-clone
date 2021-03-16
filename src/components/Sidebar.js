import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarDate } from "../data/SideBarData"
import db from '../firebase';
import {useHistory} from "react-router-dom";
// import { sidebarDate, channelsList } from "../data/SideBarData"


function Sidebar(props) {
   // console.log(props);

   const history = useHistory()
const goTochannel = (id)=>{
   if(id){
      history.push(`/room/${id}`)
   }
}



   const addChannel = ()=>{
      const promptName = prompt('enter channel name')
      const promptInfo = prompt('enter channel info')

      
      console.log(promptInfo)
      if(promptName){
         db.collection('rooms').add({
            name: promptName,
            info: promptInfo
         })
      }
      



   }



   return (
      <Container >
        <WorkspaceContainer>
           <Name>
              MyWorkSpace
           </Name>
           <NewMassage>
              <AddCircleOutlineIcon/>
           </NewMassage>
        </WorkspaceContainer>
        <MainChannels>
           
              {
                 sidebarDate.map(item=> (
                   <MainChannelItem>
                      {item.icon}
                      {item.text}
                   </MainChannelItem>
                 ))
              } 
         </MainChannels>


         <ChannelsContainer>
            <NewChannelsContainer>
               <div>
                  Channels
               </div>
               <AddIcon onClick={addChannel} />
            </NewChannelsContainer>


            <ChannelList>
               {
                  props.rooms.map(item=>(
                     <Channel onClick={()=>goTochannel(item.id)}>
                         # { item.name} 
                     </Channel>
                  ))
               }
               {/* {
                  channelsList.map(c=><Channel> # { c } </Channel> )
               } */}
               
            </ChannelList>
             

         </ChannelsContainer>
         


      </Container>
   )
}

export default Sidebar

const Container = styled.div`
background:#3f0e40;
color:#bcabbc
`
const WorkspaceContainer = styled.div`
height: 64px;
display:  flex;
align-items: center;
padding-left: 19px;
justify-content: space-between;
border: 1px solid #532753;


`
const Name = styled.div``

const NewMassage = styled.div`
width: 36px;
height: 36px;
background:#bcabbc;
color:#3f0e40;
fill: #3f0e40;
display:  flex;
align-items: center;
justify-content: center;
border-radius: 50%;
margin-right: 20px;
cursor: pointer;

`
const MainChannels = styled.div``


const MainChannelItem = styled.div`
color: #bcabbc;
display: grid;
grid-template-columns: 15% auto;
padding-left: 19px;
height: 28px;
align-items: center;
cursor: pointer;
margin-top:20px;
height: 32px;
:hover{
   background-color: #350d36;;
}

`
const ChannelsContainer = styled.div`
margin-top: 20px
`
const NewChannelsContainer = styled.div`
display:  flex;
align-items: center;
justify-content: space-between;
padding-left: 19px;
padding-right: 15px;




`

const ChannelList = styled.div`
margin-top: 20px;

`
const Channel = styled.div`
padding-left: 19px;
height: 32px;
cursor: pointer;
:hover{
   background-color: #350d36;;
}


`
