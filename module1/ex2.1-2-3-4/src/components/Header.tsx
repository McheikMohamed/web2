interface HeaderProps{
    urlLogo:string,
    children:React.ReactNode
};


const Header = (props:HeaderProps)=>{
    return(
        <header className="header">
            <div>{props.children}</div>
            <img src={props.urlLogo} alt="Logo" className="logo" />
        </header>
    )
}

export default Header;