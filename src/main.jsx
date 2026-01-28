import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainContent from './mainContent.jsx'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
import Test from './TestForMS.jsx'
// import CondtRApp from './ConditonalRenderApp.jsx'
// import CondtRd from './CondRendPract.jsx'
import Count from './count.jsx'
import NewApp from './NewApp.jsx'
import TestContact from './TestContact.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MainContent />
     <Footer />
     <Nav />
    <Test /> 
    {/* <CondtRApp />
    <CondtRd /> */}
     <Count />
    <NewApp /> 
    <TestContact /> 
    
    
    
    
    

    
    
  </StrictMode>,
)
 