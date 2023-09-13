import React from 'react'

const TikTok = ({ width = 24, height = 24, fill ='currentColor' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_373_54)">
                <path d="M22.4651 9.866C20.3261 9.866 18.3431 9.182 16.7251 8.02V16.405C16.7251 20.593 13.3181 23.999 9.13111 23.999C7.51311 23.999 6.01211 23.489 4.77911 22.623C2.82111 21.248 1.53711 18.974 1.53711 16.405C1.53711 12.217 4.94411 8.81 9.13211 8.81C9.48011 8.81 9.82011 8.839 10.1551 8.884V9.861V13.096C9.83111 12.995 9.48911 12.936 9.13211 12.936C7.22011 12.936 5.66411 14.492 5.66411 16.405C5.66411 17.737 6.42011 18.894 7.52411 19.475C8.00511 19.728 8.55211 19.873 9.13311 19.873C11.0011 19.873 12.5251 18.387 12.5951 16.535L12.5981 0H16.7241C16.7241 0.358 16.7591 0.707 16.8211 1.047C17.1121 2.619 18.0451 3.968 19.3381 4.811C20.2381 5.398 21.3121 5.741 22.4641 5.741L22.4651 9.866Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_373_54">
                    <rect width={width} height={height} fill={fill} />
                </clipPath>
            </defs>
        </svg>

    )
}

export default TikTok