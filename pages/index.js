import { basename } from 'path'
import matter from 'gray-matter'

import Link from 'next/link'
import Layout from '../components/layout'
import Container from '../components/container'


function NavItem (props) {
    return (
        <li key={props.index}>
            <Link href="/post/[slug]" as={`/post/${props.slug}`}>
                <a>
                    <span className="index">{props.index}.</span>&nbsp;
                    <span className="title">{props.data.title}</span>
                </a>
            </Link>
            <style jsx>{`
                li {
                    color: #555555;
                    padding: 7.5px 0px;
                    list-style-type: none;
                }

                .index {
                    
                }
                .title {
                    
                }
            `}</style>
        </li>
    )
}

export default function Index(props) {
    const navItems = props.posts.map((post, index) => {
        return <NavItem key={index} index={index + 1} { ...post }/>
    })
    return (
        <Layout>
            <Container>
                <nav>
                    <ul style={{paddingLeft: 0}}>{navItems}</ul>
                </nav>
            </Container>
        </Layout>
    )
}

Index.getInitialProps = async function () {
    const files = require.context('../md', true, /\.md$/)
    const posts = files.keys().map(key => {
        return {
            slug: basename(key, '.md'),
            ...matter(files(key).default)
        }
    })
    return { posts }
}