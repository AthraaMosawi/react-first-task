import './App.css';
import Parent from './components/Parent'
import Child from './components/Child'
import Button from './components/Button'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import StudentsList from './components/StudentsList'
// import ClickMe from './components/Button';

function App() {
  return(
    <div className="App">
      <StudentsList />
      {/* <Header />
      <Home />
      <Footer /> */}
      {/* <Parent />
      <Child />
      <Button /> */}
    </div>
  );
}

export default App;
