import React from 'react';

const XD = {
  box: {
  }
};

function StillLearning() {

  const refInput = React.useRef(0)

  function handelClick(){
    refInput.current.focus();
  }

  React.useEffect(
    ()=>{
      console.log("componet render")
    }
  )
  return (
    <div style={XD.box}>

      <button onClick={handelClick}>
        click me
      </button>
      <input ref={refInput}></input>
    </div>
  );
}

export default StillLearning;
