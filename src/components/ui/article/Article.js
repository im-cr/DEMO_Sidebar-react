import React from 'react'

const Article = ({pTitle}) => {
  return (

    <section className="content">
        <h2 className="title">{pTitle}</h2>
        <p>Alloy is your command center for identity - here for your compliance and fraud-fighting needs. Our single-API platform connects you to the data you need to understand your customers and their behaviors from the day they onboard and beyond. You get more automated decisions, better conversions and less fraud; your customers get a great experience.</p>    
    </section>
  )
}

export default Article;
