import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const Routing = () => {
    return (<>
        <Routes>
            <Route path='' element={<Navigate to={'/home'} />}></Route>
            <Route path='/home' element={<Home />}> </Route>
        </Routes>
    </>
    )
}

export default Routing