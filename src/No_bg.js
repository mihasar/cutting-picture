import './No_bg.css';
import { useState, useRef } from 'react';


function No_bg() {

    const InputElement = useRef();

    const [color, setColor] = useState("#000");

    function choose_color() {
        InputElement.current.click();
    };

    function change_color(e) {
        setColor(e.target.value);
    }

    return (

        <div className='No_bg_tab'>

            <span className='No_bg_tab_text'>אל תשכח להוריד את הקבצים! הם ימחקו אוטומטית כאשר תצא מהדף.</span>

            <div className='Color_div' onClick={choose_color}>

                <span className='Display_text'> צבע רקע </span>
                <span className='Display_color' style={{backgroundColor: color}}></span>

            </div>

            <input type='color' ref={InputElement} className='Input_color' onChange={change_color} />


        </div>
    )
}

export default No_bg;