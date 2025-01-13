import './App.css'
import User from "./user"
import {Utilisateur} from "../../type"

function App() {

  const user1:Utilisateur = {
    name:"Mohamed",
    age:22,
    isOnline:true
  }

  const user2:Utilisateur = {
    name:"Momo",
    age:20,
    isOnline:false
  }
  
  return(
    <div>
      <User user={user1}/>
      <User user={user2}/>
    </div>
  )
}

export default App
