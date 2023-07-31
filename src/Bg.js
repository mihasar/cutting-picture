import './Bg.css';

function Bg() {
    return (
        <div className="Bg">

            <div className='Header'>
                <span className='Header_Text'>העלאת תמונה כדי להסיר את הרקע</span>
                <button className='Header_btn'>העלאת תמונה</button>
                <span className='Header_subtext'> פורמטים נתמכים png,jpeg</span>
            </div>

            <div className='Main_Div'>

                <div className='Left_Div'>
                    Left
                </div>

                <div className='Right_Div'>
                    Right_Div
                    <div className='Right_div_middle_div'>

                        <div className='Right_div_top'>
                            <div className='Right_div_top_text'> תמונה חינם</div>
                            <div className='Right_div_top_subtext'> 612X408 תצוגה מקדימה של תמונה </div>
                            <button className='Right_div_top_btn'> הורד </button>
                            <div className='right_div_top_sub_subtext'> איכות טובה עד 0.25 מגה פיקסל</div>
                        </div>


                        <div className='Right_div_bottom'></div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Bg;
