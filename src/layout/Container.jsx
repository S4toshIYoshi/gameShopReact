const Container = ({widthC=90, mt=0, mb=0,children}) => {
    return <div style={{margin: `${mt}px auto ${mb}px auto`, width: `${widthC}%`}}>{children}</div>
}

export default Container