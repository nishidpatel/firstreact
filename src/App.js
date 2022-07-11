import logo from './logo.svg';
import './App.css';

function App() {

  // let arr = [11,22,33,44,55];
  // let arr1 = [50,60];

  // let newarr = arr.concat(arr1);
  // console.log(newarr);        //[11, 22, 33, 44, 55, 50, 60]

  // =====================================

  // let arr = [10,20,30,40,50];
  // let ans = arr.some((a) => a> 20);

  // console.log(ans);     //true


  // ======================================

  // let arr = [13,23,33]

  // console.log(arr.toString(arr));

  // ========================================

  // let arr = [10,20,30,40];
  // let ans = arr.find((a) => a> 20);

  //  console.log(ans);     //30

  // =======================================

  // let arr = [14,24,34,44];
  // arr.splice (2,0,99);
  // console.log(arr);    //[14, 24, 99, 34, 44]

  // =======================================

  // let obj = {
  //   id : 101,
  //   name : 'nishid'
  // };

  // console.log(obj.id,obj['name']);     //101 'nishid'



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React firstreact
        </a>
      </header>
    </div>
  );
  }

export default App;
