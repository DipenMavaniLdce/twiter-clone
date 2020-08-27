import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import ToolButton from '../../utils/ToolButton'
import HomeIcon from '@material-ui/icons/Home'
import Notifictions from '@material-ui/icons/Notifications'
import PostScream from '../scream/PostScream'

function NavaBar({authenticated,postScream}) {
    
    return (
       <AppBar>
           <Toolbar className= 'nav-container'>
                {authenticated ? (
                    <Fragment>
                    <Link to="/">
                    <ToolButton tip = 'Home' place = 'top'>
                        <HomeIcon color = 'secondary'></HomeIcon>
                    </ToolButton>
                    </Link>
                    <PostScream />
                    <ToolButton tip = 'Notifictions' place = 'top'>
                        <Notifictions color = 'secondary'></Notifictions>
                    </ToolButton>  
                    </Fragment>
                ) : (
                    <Fragment>
                    <Button color='inherit'  component = {Link} to = '/'>Home</Button>
                    <Button color='inherit'  component = {Link} to = '/login'>Login</Button>
                    <Button color='inherit'  component = {Link} to = '/signup'>SignUp</Button>
                    </Fragment>
                )}
               </Toolbar>
       </AppBar>
    )
}

const mapStateToProps = (state) => ({
    authenticated : state.user.authenticated
})



export default connect(mapStateToProps)(NavaBar)
