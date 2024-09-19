import { useState } from 'react';
import './App.css';
// import User from './components/User';

function App() {

  const modal = [
  {
    name: "Nike",
    price: "200$",
    id: Math.random().toString()
  },
  {
    name: "Adidas",
    price: "200$",
    id: Math.random().toString(),
  }
]

  const [num , setNum] = useState(0)

  const plusChange = () => {
    setNum((prevState) => prevState + 200 , 0)
  }

  const minusChange = () => {
    setNum(prevState => (prevState > 0 ? prevState - 200 : 0))
  }



  return (
    <div className="App">
      {/* <User/> */}
      <h1><q><em> PRICE : {num} $  </em></q></h1>
      {modal.map((el) => {
        return(
          <div className='parent' >
            <h1>{el.name}</h1>
             <h1>{el.price}</h1>
             <button onClick={plusChange}>plus</button>
             <button onClick={minusChange}>minus</button>
            
            
          </div>
        )
      })}

    </div>
  );
}

export default App;
