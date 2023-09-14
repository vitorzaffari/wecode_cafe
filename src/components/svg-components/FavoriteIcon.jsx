import React from 'react'

const FavoriteIcon = ({ width = 21, height = 21, isFavorite }) => {

    return (
        <svg id='fav' xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path id='fav' fill={`${isFavorite ? '#0D98E6' : 'none'}`} stroke="white" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z" /></svg>
    )
}

export default FavoriteIcon