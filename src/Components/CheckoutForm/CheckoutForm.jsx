import "./CheckoutForm.scss"
import { useState } from "react"
import EmailIcon from '@mui/icons-material/Email'
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare'
import BadgeIcon from '@mui/icons-material/Badge'

const CheckoutForm = ({onConfirm})=>{
    const [ name, setName ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ email, setEmail ] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }
    return(
        <div className="Container" >
            <form onSubmit={handleConfirm} className="Form" >
                <div className="InputContainer">
                    <label className="Label">
                        Nombre <BadgeIcon/>
                    </label>
                    <input
                    className="Input"
                    type="text" 
                    value= {name}
                    onChange={({ target }) => setName(target.value)}
                    />
                </div>
                <div className="InputContainer">
                    <label className="Label">
                        Teléfono <MobileScreenShareIcon/>
                    </label>
                    <input
                    className="Input"
                    type="text" 
                    value= {phone}
                    onChange={({ target }) => setPhone(target.value)}
                    />
                </div>
                <div className="InputContainer">
                    <label className="Label">
                        Email <EmailIcon/>
                    </label>
                    <input
                    className="Input"
                    type="email" 
                    value= {email}
                    onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div className="divToOrderButton" >
                    <button type="submit" className="OrderButton">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm