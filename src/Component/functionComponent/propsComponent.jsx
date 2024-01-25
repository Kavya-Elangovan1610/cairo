
function PropsComponent(props){
    const styleattrs={
        backgroundColor:"lightblue",color:"black"
    }
    return(         
        <div style={styleattrs}>
            <h1>Hello,{props.name}This is {props.course}class</h1>
        </div>
    )
}
export default PropsComponent;