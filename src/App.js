import logo from './logo.svg';
import './App.css';

function App() {
  let Data =
  [
    {
      grid: 123,
      name: 'Amit',
      fees: 50000,
      attendance: 80
    },
    {
      grid: 456,
      name: 'Ajay',
      fees: 70000,
      attendance: 90
    },
    {
      grid: 856,
      name: 'Ashish',
      fees: 30000,
      attendance: 65
    },
    {
      grid: 762,
      name: 'Raj',
      fees: 90000,
      attendance: 70
    },

  ]


   let fdata = Data.filter((v,i)=>v.attendance > 71 );
   console.log(fdata);

   let totalprise = fdata.reduce((acc,v,i)=> acc + v.fees,0);
   console.log(totalprise);

   


  return (
    <div>
      {
        Data.map ((v,i) =>{
          return(
            <div key={i}>
            <h1>{v.name}</h1>
            <h2>{v.grid}</h2>
            <h3>{v.fees}</h3>
            <h4>{}</h4>
            </div>
          )
        })
      }
    </div>
  );
  }

export default App;
