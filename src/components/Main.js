
function Main(props){
    

    return (
        <div className="main">
            <div className="middle"> 
                
                <div className="input-box">
                    <input type="text" name="toptext" value={props.toptext} onChange={props.handleChange}/>
                    <input type="text" name="bottomtext" value={props.bottomtext} onChange={props.handleChange}/>
                </div>
                
                <button onClick={props.handleClick}>Get a new meme image</button>
            </div>
        </div>
    )
}





export default Main