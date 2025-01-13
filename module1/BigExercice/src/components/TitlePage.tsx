interface TitlePageProps{
    title:string
}

const TitlePage = ({title}:TitlePageProps)=>{
    return(
        <h1> {title} </h1>
    )
}

export default TitlePage;