import React from "react";


function About({image, about}) {

    const defaultSrc = 'https://via.placeholder.com/215'

  return (
    <div>
      <aside>
        <img src={image || defaultSrc} alt="blog logo"/>
        <p>{about}</p>
      </aside>
    </div>
  );
}

export default About;