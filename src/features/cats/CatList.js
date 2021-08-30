import React from 'react'

const CatList = ({catPics}) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 3
        }}>
            {catPics?.map?.(pic => <img key={pic.id} src={pic.url} alt = "cat" />)}
        </div>
    )
}

export default CatList
