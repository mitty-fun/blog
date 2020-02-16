import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/layout'
import Container from '../../components/container'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"


function CodeBlock (props) {
    return (
        <SyntaxHighlighter language={props.language}>
            {props.value}
        </SyntaxHighlighter>
    )
}

export default function BlogTemplate(props) {
    
    const markdownBody = props.content
    const info = props.data
    return (
        <Layout>
            <div className="banner" style={{backgroundImage: `url(${info.image})`}}>
                <div className="center">
                    <h1>{info.title}</h1>
                    <h2>{(new Date(info.date)).toLocaleDateString()}</h2>
                </div>
            </div>
            <Container>
                <article>
                    <ReactMarkdown source={markdownBody} escapeHtml={false} renderers={{code: CodeBlock}} />
                </article>
            </Container>
            <style jsx>{`
                .banner {
                    width: 100%;
                    height: calc(100vh - 80px);
                    background-position: center;
                    background-size: cover;
                    position: relative;
                }
                article {
                    padding: 30px 0;
                }
                .banner::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, .25);
                }
                .center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    text-align: center;
                    transform: translate(-50%, -50%);
                    color: #fff;
                    margin: 0;
                }
                h1 {
                    font-size: 2rem;
                }
                
            `}</style>
        </Layout>
    )
}

BlogTemplate.getInitialProps = async function (context) {
    const { slug } = context.query
    const content = await import(`../../md/${slug}.md`)
    return matter(content.default)
}