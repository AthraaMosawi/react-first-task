import '../App.css';

function Button() {
    return(
        <button id="myBtn" onClick={ClickMe}>Click Me</button>
    );
}

let count = 0
function ClickMe() {
    count++;
    console.log(`This click number ${count}`);
}

export default Button;