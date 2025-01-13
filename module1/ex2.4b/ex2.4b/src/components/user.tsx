import { Utilisateur } from "../../type"
interface UserProps{
    user:Utilisateur
}

const User = (props:UserProps)=>{
    return(
        <div className="User">
            <div className="name">Name : {props.user.name}</div>
            <div className="age">Age : {props.user.age}</div>
            <div className={props.user.isOnline? "online" : "offline"}> {props.user.isOnline ? "En ligne":"Hors ligne"} </div>
        </div>
    )
}

export default User;