import Box from '@mui/material/Box';
import list_1 from './components/text_box';
import { useState } from 'react';
// import jsxlist from './components/text_box';

// function App() {

//   const [text, setText] = useState("");
//   const [temp, setTemp] = useState("");
//   const [tem, setTem] = useState("");

//   return (
//     <Box>
//     <input onChange={(e)=>{setTemp(e.target.value)}}/>
//     <input onChange={(f)=>{setTem(f.target.value)}}></input>
//     <button onClick= {()=>{setText(temp + " " + tem)}}>click me</button>
//     <div>{
//       text
//     }</div>
//     </Box>
//   );
//     }

// export default App;

function App() {
  let ls = [3, 5, 7]
  let jsxlist = ls.map( (item, index)=> <li key={index}>{item}</li> )


  return (
    <div>{jsxlist}</div>
  )


}

export default App;

//      ex_1    //
// import React, { Component } from 'react';  
// class App extends React.Component {  
//  constructor() {  
//       super();        
//       this.a = true;  
//       }  
//       render() {  
//           const bio = this.a ? (  
//               <div>  
//                   <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>   
//             </div>  
//               ) : null; 
//           const bio_versus = this.a ? null : (
//             <div><h1>Welcome to JavaTpoint!!</h1></div>
//           ); 
//               return (  
//                   <div>    
//                       { bio }   
//                       { bio_versus }
//                   </div>  
//               );  
//      }  
// }  
// export default App;  

// import React, { Component } from 'react';  
// class App extends React.Component {  
//  constructor() {  
//       super();        
//       this.state = { displayBio: false };  
//       console.log('Component this', this);  
//       this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
//       }  
//       toggleDisplayBio(){  
//           this.setState({displayBio: !this.state.displayBio});  
//           }  
//       render() {  
//           return (  
//               <div>  
//                   <h1>Welcome to JavaTpoint!!</h1>  
//                   {  
//                       this.state.displayBio ? (   
//                           <div>  
//                               <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>  
//                               <button onClick={this.toggleDisplayBio}> Show Less </button>  
//                         </div>  
//                           ) : (  
//                               <div>  
//                                   <button onClick={this.toggleDisplayBio}> Read More </button>  
//                               </div>  
//                           )  
//                   }  
//              </div>  
//         )  
//     }  
// }  
// export default App;  