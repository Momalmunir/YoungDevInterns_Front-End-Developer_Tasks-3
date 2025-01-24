import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'animate.css';
import Name from './props';
import img from './girl.jpeg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a className="animate__animated animate__bounceInLeft"    href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a className="animate__animated animate__bounceInLeft"   href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react " alt="React logo" />
        </a>
      </div>
      <h1 className="animate__animated animate__bounceInLeft ">my first Vite + React App</h1>
      <div className="card">
        <button  className="animate__animated animate__bounceInLeft"   onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className= "animate__animated animate__bounceInLeft" >
          Hello <code>this is</code> my first task of vite+react
        </p>
      </div>
     
        <Name img ={img}></Name>
      
   </>
  )


}

export default App;

// export default App
// import React, { useState, useEffect, Suspense } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import image from './girl.jpeg'
//  import './App.css'


// // Lazy load the DataDisplay component



// const DataDisplay = React.lazy(() => import('./DataDisplay'));

// const Home = () => <div><h1>Home Page</h1></div>;

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/data">Data</Link>
//             </li>
//           </ul>
          
//         </nav>

     

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/data"
//             element={
//               <Suspense fallback={<div>Loading...</div>}>
//                 <DataDisplay data={data} />
//                 <img src={image} alt={img} loading="lazy" />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React, { useState, useEffect, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './App.css'
// // Lazy load the DataDisplay component
// const DataDisplay = React.lazy(() => import('./DataDisplay'));

// function App() {
//   const [data, setData] = useState([]);
  
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
    
//     <Router>
//     <div  className= "animate__animated animate__bounceInLeft" >
//         {/* Navigation */}
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/data">Data</Link></li>
//           </ul>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element= {<Home />} />
//           <Route
//             path="/data"
//             element={
//               <Suspense fallback= {<div>Loading...</div>}>
//                 <DataDisplay data= {data} />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// // Home Page Component
// const Home = () => (
//   <div>
//     <h1>Welcome to the React SPA</h1>
//     <p>This is a simple Single Page Application using React and Vite!</p>
//   </div>
// );

// export default App;
