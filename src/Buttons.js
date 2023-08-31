import { useState } from 'react';
import { data } from './data';
import './App.css';


function Buttons(){
    const [photo, setPhoto] = useState(0);
    const {id, image} = data[photo];

    const nextPhoto = () => {
        setPhoto((photo => {
        photo++;
        if(photo > data.length -1){
        photo = 0;
        }
        return photo;
        }))
        }
        
        const previousPhoto = () => {
        setPhoto((photo => {
        photo--;
        if(photo < 0){
        return data.length -1;
        }
        return photo;
        }))
        }
    
    
    
    return(<div>
    <div className='container one title'>
    <button onClick={previousPhoto} className='btn previous'>Previous</button>
    <button onClick={nextPhoto} className='btn next'>Next</button>
    </div>
    </div>)
    }
    
    export default Buttons;
    