
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from "@/components/ui/provider"
import { BrowserRouter } from "react-router-dom";
 
createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>

  
  
   

)
