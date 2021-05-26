import {useRef, memo} from "react"
import PropTypes from "prop-types"

function Material(props)
{
    const {children, backgroundColor, id, className, style, onClick} = props
    const container = useRef(null)
    let buttonPressTimer, pageX, pageY, ripple

    function appendRipple({x, y}, isSlow)
    {
        if (container?.current && x && y)
        {
            let target = container.current
            let rect = target.getBoundingClientRect()
            let tempRipple = document.createElement("span")
            tempRipple.className = isSlow ? "ripple-slow" : "ripple"
            if (backgroundColor) tempRipple.style.backgroundColor = backgroundColor
            tempRipple.style.height = tempRipple.style.width = 1.3 * Math.max(rect.width, rect.height) + "px"
            target.appendChild(tempRipple)
            tempRipple.style.top = y - rect.top - tempRipple.offsetHeight / 2 + "px"
            tempRipple.style.left = x - rect.left - tempRipple.offsetWidth / 2 + "px"
            if (isSlow) ripple = tempRipple
            pageX = null
            pageY = null

            if (!isSlow) setTimeout(() => target && target.removeChild(tempRipple), 600)
        }
    }

    function removeRipple(isLeave)
    {
        if (ripple)
        {
            ripple.style.opacity = "0"
            if (isLeave) ripple.style.transform = "scale(0)"
            setTimeout(() =>
            {
                if (container?.current && ripple)
                {
                    container.current.removeChild(ripple)
                    ripple = null
                }
            }, 500)
        }
    }

    function onContext()
    {
        document.body.clientWidth <= 480 && onTouchMove()
    }

    function handleButtonRelease(e)
    {
        if (document.body.clientWidth > 480)
        {
            clearTimeout(buttonPressTimer)
            if (!ripple) appendRipple({x: e.clientX, y: e.clientY}, false)
            else removeRipple(false)
        }
    }

    function onMouseDown(e)
    {
        if (document.body.clientWidth > 480) buttonPressTimer = setTimeout(() => appendRipple({x: e.clientX, y: e.clientY}, true), 300)
    }

    function handleLeave()
    {
        if (document.body.clientWidth > 480)
        {
            clearTimeout(buttonPressTimer)
            removeRipple(true)
        }
    }

    function onTouchStart(e)
    {
        if (document.body.clientWidth <= 480)
        {
            pageX = e.touches[0].clientX
            pageY = e.touches[0].clientY
            buttonPressTimer = setTimeout(() => appendRipple({x: pageX, y: pageY}, true), 300)
        }
    }

    function onTouchMove()
    {
        if (document.body.clientWidth <= 480)
        {
            clearTimeout(buttonPressTimer)
            removeRipple(true)
            pageX = null
            pageY = null
        }
    }

    function onTouchEnd()
    {
        if (document.body.clientWidth <= 480)
        {
            clearTimeout(buttonPressTimer)
            if (!ripple) appendRipple({x: pageX, y: pageY}, false)
            else removeRipple(false)
        }
    }

    return (
        <div id={id}
             ref={container}
             onContextMenu={onContext}
             style={style || {}}
             className={`material ${className}`}
             onMouseDown={onMouseDown}
             onMouseUp={handleButtonRelease}
             onMouseLeave={handleLeave}
             onTouchStart={onTouchStart}
             onTouchMove={onTouchMove}
             onTouchEnd={onTouchEnd}
             onClick={onClick}>
            {children}
        </div>
    )
}

Material.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    style: PropTypes.object,
}

export default memo(Material)

// written by #Hoseyn