import React from "react"
import Menu from "../Menu"
import MenuItem from "../MenuItem"
function MenuApp(props) {
  // console.log(props) 

  let menuElements= props.data.map((mi) => <Menu {...mi}></Menu>)
   return (
      <div className="App">
        {menuElements}
      </div>)
  
 }

export default MenuApp