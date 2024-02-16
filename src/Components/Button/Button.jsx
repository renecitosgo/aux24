import "./button.scss"

function Button ({children, handleClick, ...props}) {
    return(
        <div className="btn" onClick={handleClick} {...props} >
            {children}
        </div>
    )
}
export default Button