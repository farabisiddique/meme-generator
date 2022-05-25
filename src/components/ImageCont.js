export function ImageCont(props){
    
    return (
        <div className="image-container">
            <img 
                src={props.url}
                alt="meme"
            />
            <h1 className="toptext">{props.toptext}</h1>
            <h1 className="bottomtext">{props.bottomtext}</h1>

        </div>
    )
}





