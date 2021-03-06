import React, { useState } from 'react'
import { clickMenu } from 'redux/actions'
import menu from './menu'

function Header() {
  const [active, setActive] = useState(0)

  function onClickMenu(item, key) {
    setActive(key)
    clickMenu(item.name)
  }

  return (
    <header className='menu'>
      <nav>
        {menu.map((item, key) => (
          <a
            onClick={() => onClickMenu(item, key)}
            className={key === active ? 'active' : ''}
            key={item.name}
            href={item.href}
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
