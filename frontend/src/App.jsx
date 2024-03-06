import YourComponent from './components/Alsolike';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './index.css';

function App() {
 
  return (
      <div className="bg-slate-300">
        <Navbar/>
        <div className="px-5 pt-5 font-semibold text-lg flex gap-3">
          Cryptocurrencies 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg>
          Bitcoin
        </div>
        <Hero/>
        <YourComponent/>
      </div>  
  )
}

export default App
