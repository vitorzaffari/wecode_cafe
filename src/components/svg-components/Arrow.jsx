import React from 'react'

const Arrow = ({ width = 9, height = 9, fill = 'currentColor', csName = ''}) => {
    return (
        <svg width={width} height={height} className={`menu-arrow ${csName}`} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.49998 6.78011C4.33868 6.78011 4.1774 6.72536 4.05442 6.61611L0.184627 3.17625C-0.0615424 2.95743 -0.0615424 2.60266 0.184627 2.38393C0.430697 2.1652 0.829739 2.1652 1.07593 2.38393L4.49998 5.4277L7.92404 2.38404C8.17021 2.16531 8.56921 2.16531 8.81526 2.38404C9.06155 2.60276 9.06155 2.95754 8.81526 3.17636L4.94553 6.61621C4.82249 6.72549 4.66121 6.78011 4.49998 6.78011Z" fill={fill} />
        </svg>

    )
}

export default Arrow