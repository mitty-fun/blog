import Header from './header'

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <style jsx global>{`
                body {
                    padding: 0;
                    margin: 0;
                    color: #444444;
                    background-color: #f8f8f8;
                    font-family: Arial,monospace;
                    font-size: 14px;
                    line-height: 1.428571429rem;
                }
                a {
                    color: #444444;
                    text-decoration: none;
                }
                iframe {
                    height: 300px;
                    width: 100%;
                    border: 0px;
                }
            `}</style>
        </div>
    )
}

export default Layout