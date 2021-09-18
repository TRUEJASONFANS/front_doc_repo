import React, { useEffect, useReducer, useState } from 'react';

const light_array = [ {color: 'red', duration:3000, splashDuration:2000}, {color:'green', duration:3000, splashDuration:2000}, {color:'blue', duration:3000, splashDuration:2000}]

function TrafficLight() {

  let [index, setIndex] = useState(0)

  let [color, dispatch] = useReducer((state:string, type:string)=> {
    switch(type) {
      case 'fix' : return light_array[index].color
      case 'splash' : return state === 'white' ?  light_array[index].color : 'white';
      default: throw new Error('Unexpected action');
    }
  }, light_array[index].color)
  

  useEffect(() => {
    let interval: NodeJS.Timeout | null;
    const timeoutID1 = setTimeout(() => {
      setIndex((index) => (index + 1) % 3);
      if (interval !== null) {
        clearInterval(interval)
        dispatch('fix')
      }
      // setColor(light_array[(index+1)%3].color);
    }, light_array[index].duration + light_array[index].splashDuration)


    const timeoutID2 = setTimeout(()=> {
      interval = setInterval(() => {
        dispatch('splash')
      }, 100)
    }, light_array[index].duration);
    

    return () => {
      clearTimeout(timeoutID1);
      clearTimeout(timeoutID2);
      if (interval !== null) {
        clearInterval(interval)
      }
    }
  }, [index])

  return <>
    <svg height="800" width="600" style={{border:'1px solid'}}>
      <ellipse cx="300" cy="400" rx="40" ry="40" style={{ fill: color, stroke: "black", strokeWidth: "2" }}></ellipse>
    </svg>
  </>
}
