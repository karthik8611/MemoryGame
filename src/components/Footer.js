import React from 'react'
import { ReactComponent as Github } from '../assets/github.svg'

function Footer() {
  return (
    <footer className='footer'>
      Copyright © 2023 Karthik{' '}
      <a href='https://github.com/karthik8611' target='_blank'>
        <Github className='icon' />
      </a>
    </footer>
  )
}

export default Footer
