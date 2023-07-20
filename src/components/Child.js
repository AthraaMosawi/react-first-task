import '../App.css';
import logo from '../child-01.jpg'

function Child() {
    console.log("hello from component, I am the child of this page :D !")
    return(
        <div>
            <h1 className="Child-header">This is Athraa tag from component calling</h1>
            <img src={logo} className="child-img" alt="react logo"/>
        </div>
    );
    
}

export default Child;