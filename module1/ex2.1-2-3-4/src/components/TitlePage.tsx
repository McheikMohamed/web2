interface pageTitleProps{
    title:string
  };

  const PageTitle = (props : pageTitleProps) =>{
    return(
      <h1>{props.title}</h1>
    )
  }

  export default PageTitle;