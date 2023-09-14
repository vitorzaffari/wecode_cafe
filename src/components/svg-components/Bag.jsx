import React from 'react'

const Bag = ({ width = 21, height = 21, fill = 'currentColor' }) => {
    return (
        <div className='bag icon'>
            <svg id='cart'  xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 256 256"><path id='cart' fill={fill} d="M216 64h-40a48 48 0 0 0-96 0H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16Zm-88-32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm88 168H40V80h40v16a8 8 0 0 0 16 0V80h64v16a8 8 0 0 0 16 0V80h40Z" /></svg>
        </div>
    )
}

export default Bag