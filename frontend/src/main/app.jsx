import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../tamplate/custon.css'

import React from 'react'
import Menu from '../tamplate/menu'
import Router from '../main/routers'

export default props => (
    <div className='container'>
        <Menu/>
        <Router/>
    </div>
)