import './Bg.css';
import { useState } from 'react';

function Bg() {

    const { display_no_bg_tab, setDisplay_no_bg_tab } = useState("no");

    function change_tab() {
        if (display_no_bg_tab === 'yes') {
            setDisplay_no_bg_tab('no')
        } else {
            setDisplay_no_bg_tab('yes');
        }
    }

    return (
        <div className="Bg">

            <div className='Header'>
                <span className='Header_Text'>העלאת תמונה כדי להסיר את הרקע</span>
                <button className='Header_btn'>העלאת תמונה</button>
                <span className='Header_subtext'> פורמטים נתמכים png,jpeg</span>
            </div>

            <div className='Main_Div'>



                <div className='Left_Div'>

                    <div className='Main_div_tabs_Header'>
                        <span onClick={change_tab} className='No_bg'>הסר רקע</span>
                        <span onClick={change_tab} className='Original_tab'>מקורי</span>
                    </div>

                    {display_no_bg_tab === 'yes' ?
                        <div className='Original'>
                            Original Tab
                        </div>
                        :
                        <div className='No_bg_tab'>
                            No BG Tab
                        </div>
                    }

                </div>

                <div className='Right_Div'>
                    Right_Div

                    <div className='Right_div_middle_div'>

                        <div className='Right_div_top'>
                            <div className='Right_div_top_text'> תמונה חינם</div>
                            <div className='Right_div_top_subtext'> 612x408 תצוגה מקדימה של תמונה </div>
                            <button className='Right_div_top_btn'> הורד </button>
                            <div className='Right_div_top_sub_subtext'> איכות טובה עד 0.25 מגה פיקסל</div>
                        </div>

                        <div className='Right_div_bottom'>
                            <div className='Right_div_bottom_text'>Pro</div>
                            <div className='Right_div_bottom_subtext'> 1280x1920 תמונה מלאה </div>
                            <button className='Right_div_bottom_btn'> HD הורד </button>
                            <div className='Right_div_bottom_sub_subtext'> האיכות הטובה ביותר עד 25 מגה פיקסל</div>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
}

export default Bg;
