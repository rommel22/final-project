export default function News({className,image,title,desc}){
    return(
        <div className={className}>
            <div className="news-container">
                <img src={image} alt="" />
                <div className="news-container-text">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}