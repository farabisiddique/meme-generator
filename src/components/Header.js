
import logo from '../images/Troll Face.png'
import React from 'react';



function Header(){
    const [result,setResult] = React.useState("Hello")
    
    function handleClick(){
        setResult("bazinga")
    }
    return (
        <div className="header-bar" onClick={handleClick}>
            <div className="logobox">
                <img 
                    src={logo}
                    alt="logo"
                />
                <h3>MemeGenerator</h3>
            </div>
            <div className='right-text'>
                {/* React Course - Project 3 */}
                {result}
            </div>
        </div>
    )
} 

export default Header