// way how pages are protected

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protecetd({children, authentication = true}) {
    
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authstatus = useSelector(state=> state.auth.status)

    useEffect(() => {
        if (authentication == true && authstatus !== authentication){
            navigate('/login')
        }
        else if (!authentication && authstatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    }, [authstatus,navigate,authentication])
    
    return (
    <div>
      
    </div>
  )
}

