import "./button.scss"

function Button (props){
    console.log (props, "props")
    return(
        <div className="btn">
            {props.children}
        </div>
    )
}
export default Button