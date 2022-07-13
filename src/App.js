import logo from './logo.svg';
import './App.css';

function App() {

  let Data=
  [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]


   let fdata = Data.filter((v,i)=>v.status === true );
   console.log(fdata);

   let totalprise = fdata.reduce((acc,v,i)=>acc+v.bonus + v.salary,0);
   console.log(totalprise);

   


  return (
    <div>
      {
        Data.map ((v,i) =>{
          return(
            <div key={i}>
            <h1>{v.name}</h1>
            <h3>{v.salary}</h3>
            <h4>{v.bonus}</h4>
            <h5>{v.bonus + v.salary}</h5>
            </div>
          )
        })
      }
    </div>
  );
  }

export default App;
