interface FooterProps{
    UrlLogo:string,
    children:React.ReactNode
}

const Footer = ({UrlLogo,children}:FooterProps) =>{

    return(
        <header className="Footer">
            <img src={UrlLogo} alt="logo" className="logo" />
            <div className="children-Footer"> {children} </div>
        </header>
    )
}

export default Footer;