const React = require('react');


const obj = {
  name: 'John',
  city: 'Barcelona',
  bootcamp: 'WebDev'
}

const students = ['Bob', 'Sarah', 'Anna'];


function getContent(lang) {
  if (lang === 'en') {
    return 'Intensive courses & bootcamps in Web Development, UX/UI Design, Data Analytics & Cybersecurity'
  }
  else if (lang === 'es') {
    return 'Cursos intensivos y bootcamps de desarrollo web, diseño UX/UI, análisis de datos y ciberseguridad'
  }
}


function About() {
  return(
    <div>
      <h1>Uros</h1>
      <h2>"Don't wish it was easier, wish you were better. "<sub>Jim Rohn</sub> </h2>
      <img src="https://i.giphy.com/media/3o7qDLkrKr034Z3hQI/giphy.webp" alt=""/>

      <br/>
      2 + 2 = { 2 + 2 }

      <p> Name: { obj.name } </p>
      <p> City: {obj.city} </p>
      <p> Bootcamp: {obj.bootcamp} </p>

      <p> First student - { students[0] } </p>
      <p> Last student - { students[1] } </p>

      <h3> { getContent('es') } </h3>

    </div>
  )
}



module.exports = About;