import React, { useState } from 'react'
import './navtog.css'
const NavTog = () => {
    const [show,setShow] = useState(false);
  return (
    <div>
      <ul className='menu'>
        <li>
            <a href='#'>Display</a>
            <ul className={show ? 'submenu':'submenu hidden'}>
                <li style={{display:"flex",justifyContent:"space-between"}}>
                    <a>priority</a>
                    <select style={{border:"none"}}>
                        <option value="completed">completed</option>
                        <option value="completed">to do</option>
                        <option value="completed">pending</option>
                    </select>
                </li>
                <li style={{display:"flex",justifyContent:"space-between"}}>
                    <a>status</a>
                    <select style={{border:"none"}}>
                        <option value="completed">1</option>
                        <option value="completed">2</option>
                        <option value="completed">3</option>
                        <option value="completed">4</option>
                        <option value="completed">5</option>
                    </select>
                </li>
            </ul>
        </li>
      </ul>
    </div>
  )
}

export default NavTog
