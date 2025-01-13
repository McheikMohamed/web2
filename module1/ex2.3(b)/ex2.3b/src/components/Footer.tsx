interface footerProps {
    text:string
};

const Footer = (props:footerProps) =>{
    return(
        <p>{props.text}</p>
    )
}

export default Footer