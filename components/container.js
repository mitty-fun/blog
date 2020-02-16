const Container = (props) => {
    return <div style={style}>{props.children}</div>
}

const style = {
    maxWidth: 800,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 'auto',
}

export default Container