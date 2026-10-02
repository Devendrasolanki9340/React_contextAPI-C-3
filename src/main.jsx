import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyShopContextProvider } from './context/MyWebsite.jsx'
// import TestCompoennts from './Components/TestCompoennts.jsx'
// import { ContextProvider } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(

  <MyShopContextProvider>
    <App/>
  </MyShopContextProvider>
  
    // <ContextProvider>
    //   <TestCompoennts/>
    // </ContextProvider>

)
