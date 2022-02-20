import React from 'react'

const NewItem = ({name, thumbnail}) => {
  return (
    <div className='news_item'>
      <img src={thumbnail} alt="" className="news_item_img" />
      <div className="news_item_name">{name}</div>
    </div>
  )
}

export default NewItem