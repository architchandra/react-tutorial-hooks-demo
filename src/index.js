import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';



function App() {
  return (
    <div>
      <p>
        The current count is 0
      </p>
    </div>
  );
}



ReactDOM.render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
