import { useEffect, useState } from "react";
import Cloud from "./components/Cloud";
import Quote from "./components/Quote";

function App() {

  const adviceAPI = 'https://api.adviceslip.com/advice';
  const [advice, setAdvice] = useState({});

  const newAdvice = async () => {
    const response = await fetch(adviceAPI,{
      method: 'GET',
      headers:{
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    setAdvice(data.slip);
  }

  useEffect(()=> {
    newAdvice();
  },[])
  
  return (
    <div className="App">
      <div className="quote-container">
        <h1>Advice For You</h1>
        <Cloud />
        <Quote advice={advice} newAdvice={newAdvice} />
        <p className="creator">By hrluqman</p>
      </div>
    </div>
  );
}

export default App;
