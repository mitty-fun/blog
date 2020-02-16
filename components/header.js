import Link from 'next/link'
import Container from './container'

const Header = () => {
    return (
        <div>
            <Container>
                <Link href="/">
                    <a>MITTY BLOG</a>
                </Link>
            </Container>
            <style jsx>{`
                div {
                    font-size: 16px;
                    background-color: #fff;
                    padding: 30px 0px;
                    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    )
}

export default Header