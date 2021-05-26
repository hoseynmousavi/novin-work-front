import {useEffect, useState} from "react"

function Resize()
{
    const [size, setSize] = useState({clientWidth: document.body.clientWidth, clientHeight: document.body.clientHeight})

    useEffect(() =>
    {
        function onResize()
        {
            setSize({clientWidth: document.body.clientWidth, clientHeight: document.body.clientHeight})
        }

        window.addEventListener("resize", onResize, {passive: true})
        return () => window.removeEventListener("resize", onResize)
    })

    return size
}

export default Resize