import React from "react"

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
    {name:"Noname"},
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

User.defaultProps = {
  age:1
}

export default App;
