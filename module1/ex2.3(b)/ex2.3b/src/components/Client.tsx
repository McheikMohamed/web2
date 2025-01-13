import { Client } from "../../type";

interface ListClient{
    clients:Client[]
}


const ClientAffichage = (props: ListClient) =>{
return(
    <div>
        <ul>
            {props.clients.map((client)=>(
                <li key={client.name}>
                    <strong>{client.name}</strong> -Age : { client.age}
                </li>
            ))}

        </ul>
    </div>
)
}

export default ClientAffichage;