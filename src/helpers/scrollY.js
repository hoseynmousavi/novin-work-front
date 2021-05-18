import {useEffect, useState} from "react"

function ScrollY()
{
    const [scrollY, setScrollY] = useState(0)

    useEffect(() =>
    {
        function onScroll()
        {
            setScrollY(window.scrollY)
        }

        document.addEventListener("scroll", onScroll, {passive: true})
        return () => document.removeEventListener("scroll", onScroll)
    })

    return scrollY
}

export default ScrollY