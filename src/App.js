import logo from './logo.svg';
import './App.css';

function App() {

  // ======array======

    // let arr = [4,5,6,1,2,3];

  // let arr1 = [...arr];
  // console.log(arr1);
 //=============================
 
//  let arr2 = [11,22];
//  let ans = [...arr,...arr2];
//  console.log(ans);      //[4, 5, 6, 1, 2, 3, 11, 22]

// =================================

  // const [f,s,t,fo,fi,si] = arr;
  // console.log(fi);


  // ==========obj==============

  // let obj = {id:101 ,name: 'nishid'};

  //  let obj1 = {...obj};
  //  console.log(obj1);     //{id: 101, name: 'nishid'}

  // ==============================

  // let obj2 = {id: 102 , place: 'kamrej'};
  // let ans = {...obj, ...obj2};
  // console.log(ans);     //{id: 102, name: 'nishid', place: 'kamrej'}

  // ==============================

  // let {id,name} = obj;
  // console.log(name,obj,id);     //{id: 101, name: 'nishid'} 101



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
