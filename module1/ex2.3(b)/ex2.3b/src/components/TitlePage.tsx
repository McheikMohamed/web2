interface TitlePage{
    title:string
};


const PageTitle = (props:TitlePage) =>{
    return(
        <h1>{props.title}</h1>
    )
}

export default PageTitle