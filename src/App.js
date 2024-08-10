import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from 'react';


function App() {
  useEffect (() =>{
    Aos.init({duration: 2000,
      })
  },[])
  return (
    <div className="App">
      <div className='animation'></div> 
      <div className='animation'></div>    
      <div className='animation'></div>  
      <h1>zoom-out</h1>   
      <div className='animation' data-aos="zoom-out"></div>   
      <h1>slide-up</h1> 
      <div className='animation' data-aos="slide-up"></div>    
      <h1>slide-left</h1>
      <div className='animation' data-aos="slide-left"></div>  
      <h1>zoom-in</h1>  
      <div className='animation' data-aos="zoom-in"></div>    
      <h1>fade-up</h1>
      <div className='animation' data-aos="fade-up"></div>
      <h1>fade-right</h1>
      <div className='animation' data-aos="fade-right"></div>
      <h1>flip-up</h1>
      <div className='animation' data-aos="flip-up"></div>
      <h1>flip-left</h1>
      <div className='animation' data-aos="flip-left"></div>

      <h1>zoom-in</h1>
      <div className=' d-flex flex-row justify-content-center scrollbox' data-aos="zoom-in">
      <div className=''>
      <div className='d-flex'>
          <div className='box d-flex flex-column justify-content-center' >
            <h2 data-aos="slide-left">AI won't replace developers; but developers with AI might.</h2>
            <p data-aos="slide-left">On Tublian, every developer has their personal AI assistant to stay on top of their game.</p>
          </div>
          <div>
            <img src='https://www.tublian.com/static/media/usingAI.e8378906.png' alt='img'/>
          </div>
        </div>
      </div>
        
      </div>
      <div className='animation'></div> 
      <div className='animation'></div>    
      <div className='animation'></div>  
    </div>
  );
}

export default App;
