import React from 'react'

const Search = ({ width = 16, height = 16, fill='currentColor' }) => {
    return (
        <svg className='icon' width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_9_469)">
                <path d="M15.8047 14.862L11.8253 10.8827C12.9097 9.5564 13.4429 7.86406 13.3146 6.15571C13.1862 4.44735 12.4061 2.85369 11.1357 1.70435C9.8653 0.555007 8.20173 -0.062072 6.48909 -0.0192508C4.77646 0.0235704 3.1458 0.723015 1.93441 1.93441C0.723015 3.1458 0.0235702 4.77646 -0.019251 6.48909C-0.0620722 8.20173 0.555007 9.8653 1.70435 11.1357C2.85369 12.4061 4.44735 13.1862 6.15571 13.3146C7.86406 13.4429 9.5564 12.9097 10.8827 11.8253L14.862 15.8047C14.9877 15.9261 15.1561 15.9933 15.3309 15.9918C15.5057 15.9903 15.6729 15.9202 15.7965 15.7965C15.9202 15.6729 15.9903 15.5057 15.9918 15.3309C15.9933 15.1561 15.9261 14.9877 15.8047 14.862ZM6.66667 12C5.61183 12 4.58069 11.6872 3.70362 11.1012C2.82656 10.5151 2.14298 9.68218 1.73931 8.70764C1.33564 7.73311 1.23002 6.66075 1.43581 5.62618C1.6416 4.59162 2.14955 3.64131 2.89543 2.89543C3.64131 2.14955 4.59162 1.6416 5.62618 1.43581C6.66075 1.23002 7.73311 1.33564 8.70764 1.73931C9.68218 2.14298 10.5151 2.82656 11.1012 3.70362C11.6872 4.58069 12 5.61183 12 6.66667C11.9984 8.08067 11.436 9.4363 10.4361 10.4361C9.4363 11.436 8.08067 11.9984 6.66667 12Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_9_469">
                    <rect width={width} height={height} fill={fill} />
                </clipPath>
            </defs>
        </svg>

    )
}

export default Search