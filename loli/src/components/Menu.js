import React from 'react'
import Logout from "./Logout";
import Sumoner from './Sumoner';

const Menu = () => {
  return (
    
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarColor03">
      <h2>Loli Sumoner</h2>
    </div>
    <Logout/>
  </div>
</nav>
        <Sumoner/>
        </div>
  )
}

export default Menu