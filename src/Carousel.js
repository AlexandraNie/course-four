import { useState } from 'react';
import { data } from './data';
import './App.css';


function Carousel(){
    const [photo, setPhoto] = useState(0);
    const {id, image} = data[photo];
    
    
    
    return(<div>
      <div className='container one title'>
      <h1>Courses we offer:</h1>
      </div>
    
      <div className='container one title'>
        
      
    
      <div className='position'>
        <img src={image} width="700px" height="465px" alt='illustration' />
        <h2>{id}</h2>
      </div>
    
      
       </div>
    
    
    </div>)
          
        
      
    }
    
    export default Carousel;
    