import React from 'react'

const ScreenPage = ({data}) => {
  return (
    <div>
      <h2>{data?.heading}</h2>
      <div className='src-img'>
        <img className='dummy-img' src={data?.image} draggable="false" />
      </div>
      <div dangerouslySetInnerHTML={{__html: data?.pageDescription}}>
        
      </div>
    </div>
  )
}

export default ScreenPage