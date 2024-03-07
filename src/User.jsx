function User(props)
{
    return(
        <>
        <div className="container">
            <img src="images/pic2.jpg" className="ing" alt="archu" width="100px" height="100px"></img>
            <h2>{props.name}</h2>
            <h2>{props.city}</h2>
        <div className="button">
            <button className="primary">Contact me</button>
            <button className="primary outline">Linkedin</button>
        </div>
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                <li>html & css</li>
                <li>javascript</li>
                <li>reactjs</li>
                <li>c programming</li>
                <li>java</li>
                <li>mongodb</li>
            </ul>
        </div>
        </div>

        < />
    );
};
export default User;