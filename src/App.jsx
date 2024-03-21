import './App.css'
import Counter from './Counter';
import Users from './Users';

function App() {
  const styling = {
    backgroundColor: "seaGreen",
    borderRadius: "10px",
    margin: "15px"
  };

  function handleClick() {
    alert('Click button clicked')
  }
  const addFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h2>React exploring more</h2>
      <Users></Users>
      <Counter></Counter>
      <button style={styling} onClick={handleClick}>Click Me</button>
      <button style={styling} onClick={() => {alert('Button 2 got clicked')}}>Button 2</button>
      <button style={styling} onClick={() => addFive(3)}>Got eight</button>
      
    </>
  )
}

export default App
