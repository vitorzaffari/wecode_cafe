import React from 'react'

const MenuIcon = ({ width = 16, height = 16, fill='currentColor' }) => {
    return (
        <svg className='icon' id='menu'  width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_9_470)">
                <path id='menu' d="M15.3333 7.33333H0.666667C0.298477 7.33333 0 7.63181 0 8C0 8.36819 0.298477 8.66667 0.666667 8.66667H15.3333C15.7015 8.66667 16 8.36819 16 8C16 7.63181 15.7015 7.33333 15.3333 7.33333Z" fill={fill} />
                <path id='menu' d="M15.3333 2.66667H0.666667C0.298477 2.66667 0 2.96514 0 3.33333C0 3.70152 0.298477 4 0.666667 4H15.3333C15.7015 4 16 3.70152 16 3.33333C16 2.96514 15.7015 2.66667 15.3333 2.66667Z" fill={fill} />
                <path id='menu' d="M15.3333 12H0.666667C0.298477 12 0 12.2985 0 12.6667C0 13.0349 0.298477 13.3333 0.666667 13.3333H15.3333C15.7015 13.3333 16 13.0349 16 12.6667C16 12.2985 15.7015 12 15.3333 12Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_9_470">
                    <rect width={width} height={height} fill={fill} />
                </clipPath>
            </defs>
        </svg>

    )
}

export default MenuIcon