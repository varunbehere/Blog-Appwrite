import React from 'react'
import {Container,Logo, LogoutBtn} from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state)=> state.auth.status)
  const naivgate = useNavigate()
  const navItems = [
    {
      name : 'Home',
      slug : '/',                                 //path
      active : true
    },
    {
      name : 'Login',
      slug : '/login',                            //path
      active : !authStatus,
    },
    {
      name : 'Signup',
      slug : '/signup',                           //path
      active : !authStatus,
    },
    {
      name : 'All Posts',
      slug : '/all-posts',                        //path
      active : authStatus,
    },
    {
      name : 'Add Post',
      slug : '/add-posts',                        //path
      active : authStatus,
    },
  ]
  return (
    <header className=' py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to = '/'>
              <Logo/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {
              navItems.map((item)=>
              item.active ? (
                <li key = {item.name}>
                  <button 
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    onClick={()=> naivgate(item.slug)}
                    >{item.name}</button>
                </li>
              ): null)
            }
            {
              authStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )
            }
          </ul>
        </nav>
      </Container>


    </header>
  )
}

export default Header
