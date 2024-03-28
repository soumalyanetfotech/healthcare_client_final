import flower1 from '../assets/flower1.png';

import flower2 from '../assets/flower2.png';
import pink from "../assets/rectanglepink.png";
import '../css/Assesment.css';
import { Link } from 'react-router-dom';

export const Assesment =()=>{
    return(
    <>
        <div class="banner11">
        <img class="img100" src={pink} alt="banner image 1"/>

        <div class="hero-text110">
            <h2>Anxiety Assessment Test </h2>
            <h6>Welcome to the Anxiety Assessment Test. This simple assessment is designed to <br/> help you gain insights into your anxiety levels. Remember, this is not a diagnostic <br/>tool, but it can provide a starting point for understanding your feelings and <br/> experiences.</h6>
            
        </div>
        <div class="wave110">
            <img class="img80" src={flower1} alt="girl icon"/>
            <img class="img90" src={flower2} alt="girl icon"/>

        </div>
        <div class="text110">
            <h2>Instruction </h2>
            <h6>The following questions will help you assess your anxiety. Be honest and choose the <br/> option that best describes your experiences within the last two weeks.</h6>
            <div >
                <button className="continue">
                <Link to="/assesment1" className="assbutt1">
        Continue
        </Link>
                </button>
                
        

            </div>
        </div>
        
    </div>
    </>
    );
};