import React, {useState, useRef} from 'react'
import Calendar from '../calendar/Calendar';
import useOutsideClick from './useOutsideClick';

const ClickOutside = () => {
  const [show, setSate] = useState(false);
const ref = useRef(null)

useOutsideClick(ref, () => {
  if(show) setSate(false)
})
  return (
    <div className="App">
    <button onClick={() => setSate(!show)} >
      Menu
    </button>
    {show && (
      <div ref={ref}>
       <Calendar/>
      </div>
    )}
  </div>
  )
}

export default ClickOutside