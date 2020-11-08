// Import react
const React = require('react');

const UserProfile = require('./components/UserProfile');

// Complete the function component returning the HTML
function Dashboard() {
  return(
    <div>
      <h1>Dashboard</h1>

      <UserProfile 
        name="Bill Gates" 
        linkedinUrl="https://www.linkedin.com/in/williamhgates/" 
        profilePhoto="https://i.imgur.com/sSoDxLe.jpg"
      />
      
      <UserProfile 
        name="Maggie Appleton" 
        linkedinUrl="https://www.linkedin.com/in/maggieappleton/" 
        profilePhoto="https://i.imgur.com/uRvE7z3.jpg"
      />

    </div>
  )
}

module.exports = Dashboard;