import './App.css';
import './component/profile/Profile.css'
import React from 'react'
import photo from './la.jpg'
import Profile from './component/profile/Profile'
function App() {
  const handleName = (fullName) => alert(fullName);
  console.log(photo)
    return (
    <div className="App">
     <Profile  fullName={"Elghorez Lamjed"}
      profession ={"Web Developer"}
      bio={"Développeur web passionné, j'aime tout ce qui a trait à la technologie et suis toujours à l'affût des nouvelles technologies et des nouvelles idées novatrices dans le monde entier "}
      handleName={handleName}

      >
       
        {photo}
        </Profile>
   </div>
  );
}

export default App;
