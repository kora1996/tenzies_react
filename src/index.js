import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './css/style.css';

// const rootElement = document.getElementById("root")
// const root = ReactDOM.createRoot(rootElement)

// root.render(
//     <StrictMode>
//         <App/>
//     </StrictMode>
// )

ReactDOM.render(<App/>, document.getElementById('root'))