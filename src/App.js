import './App.css';
import Parent from './components/Parent'
import Child from './components/Child'
import Button from './components/Button'
// import ClickMe from './components/Button';

function App() {
  return(
    <div className="App">
      <Parent />
      <Child />
      <Button />
    </div>
  );
}

export default App;
