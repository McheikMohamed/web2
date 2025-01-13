interface HeaderProps{
    UrlLogo:string,
    children:React.ReactNode
}

const Header = ({UrlLogo,children}:HeaderProps) =>{

    return(
        <header className="header">
            <img src={UrlLogo} alt="logo" className="logo" />
            <div className="children-header"> {children} </div>
        </header>
    )
}

export default Header;