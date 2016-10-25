import React from 'react'

const IdeasList = ({ideas, handleDeleteIdea}) => {
  return(
    <div>
    { ideas.map( (idea) => <Idea {...idea}
                                 key={idea.id}
                                 handleDelete={handleDeleteIdea}
                                 /> ) }
    </div>
  )
}

const Idea = ( {title, body, id, handleDelete} ) => {
  return(
    <div>
        <h1 className="idea">{title} - {id}</h1>
        <h4>{body}</h4>
        <button onClick={ () => handleDelete(id) }>Delete</button>
    </div>
  )
}

export default IdeasList;
