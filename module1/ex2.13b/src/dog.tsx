import { useState, useEffect } from 'react';

interface DogProps{
    message:string
    statut:string
}

const Dog =(()=>{

    const [dog,setDog] = useState<DogProps|undefined>(undefined)
    const [isHovered,setIsHovered] = useState(false)

    const fetchDog = async () =>{

        try{
            const response = await fetch("https://dog.ceo/api/breeds/image/random")
            const dog = await response.json()

            setDog({
                message:dog.message ?? "No dog found",
                statut:dog.statut ?? "Error"
            })

        }catch(error){
            console.log("Erreur : ",error )
            setDog({
                message:"Failed to fetch image",
                statut:"Error"
            })
        }
    }

    useEffect(()=>{
        fetchDog()

        const intervalId=setInterval(()=>{
            if(!isHovered){
                fetchDog()
            }
        },5000)

        return () => clearInterval(intervalId)
        
    },[isHovered])
    
    if(!dog)
        return <p>Loading ...</p>

    return(
        <>
        <h2>Random dog</h2>
        <img 
        src={dog.message}
        alt="Random Dog" 
        style={{maxHeight:300}} 
        onMouseDown={() => setIsHovered(true)} 
        onMouseUp={()=> setIsHovered(false)}
        />
        </>
    )
})

export default Dog;