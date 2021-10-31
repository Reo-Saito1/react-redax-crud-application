import React from "react"
import PropTypes from "prop-types"

// class App extends Component {
//   render (){
//     return(
//       <div>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("Iam Clicked!")}}/>
//       </div>
//     )
//   }
// }

const App = () => {
  const profiles =[
    {name:"Taro",age:10},
    {name:"Hanako",age:5},
    {name:"Noname",age:3},
  ]
  return(
    <div>
      {
      profiles.map((profile,index) => {
        return <User name={profile.name} age={profile.age}key={index}/>
      })
      }
    </div>
  )
}

const User = (props) => {
  return (
    <div>
      Hi, Iam {props.name} and {props.age} years old!
    </div>
  )
}



export default App;
