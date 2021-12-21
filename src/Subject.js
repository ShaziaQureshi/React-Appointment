import React from 'react';
import ReactDOM from "react-dom"
function Subjectfun(props){
return(
  <div>
    <form>
      <input type="text" name="subject"  placeholder="Team standup Meeting"  onChange={props.HandleOnChange}></input>
      </form>

  </div>
  )
}

export default Subjectfun