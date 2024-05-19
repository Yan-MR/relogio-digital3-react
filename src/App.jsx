import React, { useState, useEffect } from "react";

function RelogioDigital(){
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    const interval = setInterval(()=>{
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return() => clearInterval(interval);
  },[]);

  return(
    <div className="container">
      <h2 className="relogioDigitall">Relógio Digital</h2>
      <h2 className="relogioDigitall">{hora}</h2>
    </div>
  );
}
export default RelogioDigital