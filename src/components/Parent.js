import '../App.css';
import logo from '../parent-02.jpg'

function Parent() {
    console.log("hello from main page, I am the parent of this page :D !")
    return(
        <div>
            <h1 className="App-header">This is Athraa tag from the main page</h1>
            <img src={logo} className="parent-img" alt="react logo"/>
        </div>
    );
    
}
export default Parent;