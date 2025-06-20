import { useState ,useEffect,useRef} from "react";
import './ImageSlider.css';

import slider1 from "./slide-1.jpg";
import slider2 from "./slide-2.jpg";
import slider3 from "./slide-3.jpg";

const images = [slider1, slider2, slider3];


function ImageSlider() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [NtranslateX,setTranslateX] = useState(0);

  const intervelRef = useRef(null);
  const timeRef = useRef(null);

  const setTime = function () {
    if (intervelRef.current) clearInterval(intervelRef.current);

    intervelRef.current = setInterval(() => {
      handleMove();
      resetTimeBar();
    }, 5000);

    resetTimeBar();
  };

  const clearTime = function () {
    clearInterval(intervelRef.current);
    if (timeRef.current) {
      timeRef.current.style.transition = "none";
      timeRef.current.style.width = "0%";
    }
  };
  
  function resetTimeBar() {
    if (timeRef.current) {
      timeRef.current.style.transition = "none";
      timeRef.current.style.width = "0%";
      void timeRef.current.offsetWidth;
      timeRef.current.style.transition = "width 5s linear";
      timeRef.current.style.width = "100%";
    }
  }

  
    useEffect(()=>{
      setTime();
      return () => clearTime();
    },[]) 




function handleMove() {
  setCurrentIndex(prev => {
    const newIndex = (prev + 1) % images.length;
    console.log("New Index:", newIndex);
    translateX(newIndex);
    return newIndex;
  });
}

  function handleManualMove(d){
    clearTime();
    translateX(d);
    setCurrentIndex(d);
    setTime();
  } 
  const translateX = (i) =>{
         if(i === 0){ setTranslateX(0)  ;}
    else if(i === 1){ setTranslateX(101);}
    else if(i === 2){ setTranslateX(201);}
  }

  return (
    <div className="imageSlider" >
        <div className="slider-track"style={{ transform: `translateX(-${NtranslateX}%)` }}>


          <div className="slide" style={{backgroundImage:`url(${images[0]})`}}>
            
          </div>

          <div className="slide" style={{backgroundImage:`url(${images[1]})`}}>
           
          </div>

          <div className="slide" style={{backgroundImage:`url(${images[2]})`}}>
            
          </div>
        </div>
          <div className="time-indicator" ref={timeRef}></div>


      <div className="image-indicators">

        <button className="move arrow1" onClick={() => {handleManualMove(0);}}>
          <span ></span>
        </button>
        <button className="move arrow2" onClick={() => {handleManualMove(1);}}>
          <span ></span>
        </button>
        <button className="move arrow3" onClick={() => {handleManualMove(2);}}>
          <span ></span>
        </button>

      </div>
    </div>

  );
}

export default ImageSlider;
