import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from "./ChatInput"
import ChatMassage from "./ChatMassage"
import db from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';



function Chat({user}) {

   let {channelId} = useParams()
   const [channel, setChannel] = useState()
   const [info, setInfo] = useState()

   const [messages, setMessages] = useState([])


   // const getMessages= () =>{
   //    db.collection('rooms')
   //    .doc(channelId)
   //    .collection("messages")
   //    .orderBy('timestamp', 'asc')
   //    .onSnapshot((snapshot)=>{
   //     let messages =snapshot.docs.map((doc)=>doc.data()) 
   //       setMessages(messages);

   //       // console.log(messages)
         
   //    })


   // } 



    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            setMessages(messages);
        })
    }



      // const sendMessage= (text)=>{
      //    if(channelId){
      //       let payload={
      //          text : text,
      //          timestamp: firebase.firestore.Timestamp.now(),
      //          user : user.name,
      //          userImage: user.photo
      //       }
      //       console.log(payload);
      //       db.collection('rooms').doc(channelId).collection('messages').add({payload})
      //    }
      // }
const sendMessage = (text) => {
        if(channelId){
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo
            }
            db.collection("rooms").doc(channelId).collection('messages').add(payload);
        }
    }



//    const getChannel = ()=> {
//       db.collection('rooms')
//       .doc(channelId)
//       .onSnapshot((snapshot)=>{
//          setChannel(snapshot.data());
//          // console.log(snapshot.data())
//       })
//    }

//      useEffect(() => {
//         getChannel();
//         getMessages()
    
//   }, [channelId])
   



    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        })
    }
    const getInfo = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setInfo(snapshot.data());
        })
    }

    useEffect(()=>{
        getChannel();
        getInfo();
        getMessages();
    }, [channelId])
   return (
      <Container>
         <Header>
            <Channel>
               <ChannelName>
                  # {channel && channel.name} 
               </ChannelName>
               <ChannelInfo>
                 {info && info.info}
               </ChannelInfo>
            </Channel>
            <ChannelDetail>
               <div>
                  Details
               </div>
               <Info />
               
            </ChannelDetail>



         </Header>
         <MassaigeContainer>
            {
               messages.toString().length > 0 && 
               messages.map((data, index)=>(
                  <ChatMassage 
                  text = {data.text}
                  name = {data.user}
                  image = {data.userImage}
                  timestamp= {data.timestamp}

                  
                  />
               ) )
            } 


            
           

         </MassaigeContainer>


         <ChatInput sendMessage ={sendMessage} />         

      </Container>


   )
}

export default Chat

const Container = styled.div`
display: grid;
// grid-template-rows: 4px auto ;
grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
   // background-color: #aaa044;
   padding-left: 20px;
   padding-right: 20px;
   display:flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: ivory 1px solid;



`

const MassaigeContainer = styled.div`
   background -color: #f0f0f0f0;
   display: flex;
    flex-direction: column;
    overflow-y: scroll;

`

// const ChatInput = styled.div`
//    background-color: #ffff44;

// `
const ChannelName = styled.div`
   font-size: 26px;
   font-weight: 600;
`
const ChannelInfo = styled.div`
   font-size: 16px;
   font-weight: 400;
`

const Channel = styled.div`
`
const ChannelDetail = styled.div`
   display:flex;
   align-items: center;
   color: #606060;


`

const Info = styled(InfoOutlinedIcon)`
   margin-left: 10px

`





//     let { channelId } = useParams();
//     const [ channel, setChannel ] = useState();
//     const [ messages, setMessages ] = useState([])

//     const getMessages = () => {
//         db.collection('rooms')
//         .doc(channelId)
//         .collection('messages')
//         .orderBy('timestamp', 'asc')
//         .onSnapshot((snapshot)=>{
//             let messages = snapshot.docs.map((doc)=>doc.data());
//             setMessages(messages);
//         })
//     }

//     const sendMessage = (text) => {
//         if(channelId){
//             let payload = {
//                 text: text,
//                 timestamp: firebase.firestore.Timestamp.now(),
//                 user: user.name,
//                 userImage: user.photo
//             }
//             db.collection("rooms").doc(channelId).collection('messages').add(payload);
//         }
//     }

//     const getChannel = () => {
//         db.collection('rooms')
//         .doc(channelId)
//         .onSnapshot((snapshot)=>{
//             setChannel(snapshot.data());
//         })
//     }

//     useEffect(()=>{
//         getChannel();
//         getMessages();
//     }, [channelId])

//     return (
//         <Container>
//             <Header>
//                 <Channel>
//                     <ChannelName>
//                         # { channel && channel.name}
//                     </ChannelName>
//                     <ChannelInfo>
//                     Company-wide announcements and work-based matters
//                     </ChannelInfo>
//                 </Channel>
//                 <ChannelDetails>
//                     <div>
//                         Details
//                     </div>
//                     <Info />
//                 </ChannelDetails>
//             </Header>
//             <MessageContainer>
//                 {
//                     messages.length > 0 &&
//                     messages.map((data, index)=>(
//                         <ChatMassage
//                             text={data.text}
//                             name={data.user}
//                             image={data.userImage}
//                             timestamp={data.timestamp}
//                         />
//                     ))
//                 }
//             </MessageContainer>
//             <ChatInput sendMessage={sendMessage} />
//         </Container>

//     )
// }

// export default Chat;

// const Container = styled.div`
//     display: grid;
//     grid-template-rows: 64px auto min-content;
//     min-height: 0;
// `

// const Channel = styled.div``

// const ChannelDetails = styled.div`
//     display: flex;
//     align-items: center;
//     color: #606060;
// `

// const ChannelName = styled.div`
//     font-weight: 700;
// `

// const ChannelInfo = styled.div`
//     font-weight: 400;
//     color: #606060;
//     font-size: 13px;
//     margin-top: 8px;
// `

// const Info = styled(InfoOutlinedIcon)`
//     margin-left: 10px;
// `

// const Header = styled.div`
//     padding-left: 20px;
//     padding-right: 20px;
//     display: flex;
//     align-items: center;
//     border-bottom: 1px solid rgba(83, 39, 83,.13);
//     justify-content: space-between;
// `

// const MessageContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     overflow-y: scroll;
// `
