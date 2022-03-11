import { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';



function App(props) {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  return (
    <div>
      <p>
        The current {text || 'count'} is {count}.
      </p>
      <button onClick={() => setCount(count + 1)}>
        -1
      </button>
      <button onClick={() => setCount(props.count)}>
        Reset
      </button>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
App.defaultProps = {
  count: 0,
};



ReactDOM.render(
  <StrictMode>
    <div>
      <App count={2} />
    </div>
  </StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
