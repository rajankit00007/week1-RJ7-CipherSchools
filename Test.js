import React from "react";
// import "./test.css";
import AllUserList from "./components/AllUserList";

// const Test =() => {
// return (
//   <div>
//     <h1>
//       Hello, I am Ankit
//     </h1>
//   </div>
// );
// };

class Test extends React.Component{
 state={ isLoggedIn : false};


// render() {
//   console.log("Hello");
//   return( 
//     <div>
//       <h1 
//       id="testId" style={{
//         color:"red",
//         backgroundColor: "yellow",
// }}
// >
//       Hello, I am Ankit
//       </h1>
//     </div>
//   );
// }
 

render() {
  return(
    <div>
      
      {!this.state.isLoggedIn ? (
      <h1>you are not logged In!</h1>
      ):(
      <h1>Congratulations , You are Logged in!</h1>
      )}
      <button onClick={(e) => this.setState({isLoggedIn: true})}>
        Login!
      </button>
    </div>
  );
}
}
export default Test;