const React = require("react");
const StudentCard = require('./components/StudentCard');   // <-- import the component

function StudentsPanel() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Student Card</title>
        <link rel="stylesheet" href="css/style.css" />
      </head>
      <body>
        <h1>Students Panel</h1>
        <StudentCard  fName="Uros" lName="Cirkovic" photo="https://i.imgur.com/h0uGpjB.jpg" />            {/*  <==  ADD */}
        <StudentCard   fName="John" lName="Doe" photo="https://www.beaulieu.co.uk/wp/wp-content/uploads/2016/02/Crash-Test-Dummy-21.jpg"/>            {/*  <==  ADD */}
      </body>
    </html>
  );
}

module.exports = StudentsPanel;
