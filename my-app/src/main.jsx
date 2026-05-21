import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header/Header'
import './assets/styles/reset.css'



createRoot(document.getElementById('root')).render(
    <div>
        <Header/>
        <App />
    </div>
        
)
