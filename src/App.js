import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
