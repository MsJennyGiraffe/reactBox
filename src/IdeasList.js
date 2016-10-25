import React from 'react'

const IdeasList = ({ideas}) => {
  return(
    <div>
    { ideas.map( (idea) => <Idea {...idea} key={idea.id} /> ) }
    </div>
  )
}

const Idea = ( {title, body, id} ) => {
  return(
    <div>
        <h1>{title} - {id}</h1>
        <h4>{body}</h4>
    </div>
  )
}

export default IdeasList;
