import {ToastContainer as ToastCont} from "react-toastify"

function ToastContainer()
{
    return (
        <ToastCont position="bottom-left"
                   autoClose={3000}
                   hideProgressBar={false}
                   newestOnTop
                   closeOnClick
                   rtl
                   pauseOnFocusLoss
                   draggable
                   pauseOnHover
        />
    )
}

export default ToastContainer