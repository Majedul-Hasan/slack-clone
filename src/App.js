import React, { useEffect, useState } from "react";
// import React { useEffect } from "react";
import {  BrowserRouter as Router, Switch,  Route,  Link
} from "react-router-dom";
import './App.css';
import Chat  from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
// import Styled from "styled-components";
import styled from "styled-components";
import db from "./firebase"
import {auth, provider} from "./firebase"

function App() {
  const [rooms, setRooms]= useState([]) 
  const [ user, setUser ] = useState( JSON.parse(localStorage.getItem('user'))) 


  const getChannels = ()=> {
    db.collection('rooms').onSnapshot((snapshot)=> {
      // console.log(snapshot.docs);
      // console.log("hello");
      setRooms(snapshot.docs.map((doc)=> {
        // console.log(doc.data());
        // return doc.data()
        return {
          id: doc.id,
          name: doc.data().name
        }

      }))
    })
    
  }

const signOut =()=>{
      auth.signOut().then(()=>{
        setUser(null)
      })
      // localStorage.removeItem('myData');
    }


  useEffect(() => {
   getChannels();
    
  }, [])
  // console.log(rooms);
  console.log("user in State" , user );
  
// getChannels();
  return (
    <div className="App">
      <Router>
        {
          !user ?
          //  <Route path="/login">
              <Login setUser= {setUser} />
            // </Route>
       :

        <Container>
          <Header signOut ={signOut} user={user} />
            
          
          <Main>
            <Sidebar rooms={rooms} />            

            <Switch>
            <Route path="/room/:channelId">
              <Chat user={user} />
           </Route>
           <Route path='/'>
             select or create channel
              </Route>
            {/* 
              <Route path="/">
              <Login />
            </Route>   */}
            </Switch>
          </Main>

        </Container>
      }
 
    </Router>

</div>
   
  );
}


export default App;


const Container = styled.div`
width: 100%;
height:100vh;
// background-color: orange;
display:grid;
grid-template-rows: 38px minmax(0, 1fr);
`
const Main = styled.div`
// width: 20%;
// height:100vh;
 background-color: #dadada;
display: grid;
grid-template-columns: 260px auto;
`