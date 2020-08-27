import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import withStyle from '@material-ui/core/styles/withStyles'

import Grid from '@material-ui/core/Grid'
import LoginIcon from '../images/login.png'
import TypoGraphy from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import CircularProgress from '@material-ui/core/CircularProgress'

//import redux stuff
import {connect } from 'react-redux'
import {loginUser} from '../redux/actions/userAction'

const style = (theme) => ({
    ...theme.spreadThis
})
function Login({classes,history,loginUser,user,UI :{loading,errors}}) {
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    
    const userData = {
        email : email,
        password : password
    }
    
    const handleSubmit = (event) => {
        
        event.preventDefault()
        loginUser(userData,history)
        
    }
    
    return (
        <Grid container className = {classes.form} >
            <Grid item sm></Grid>
            <Grid item sm >
                <img src={LoginIcon} alt = 'login' className = {classes.image}></img> 
                <TypoGraphy variant='h3' >Login</TypoGraphy>
                <form  noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    className= {classes.textfield}
                    id="email"
                    label="email"
                    type = 'email'
                    variant="outlined"
                    color="primary"
                    helperText={errors.email}
                    error = {errors.email ? true : false}
                    onChange = {(event) => setEmail(event.target.value)} 
                />
                <TextField
                    className= {classes.textfield}
                    id="password"
                    label="password"
                    variant="outlined"
                    color="primary"
                    helperText={errors.password}
                    error = {errors.password ? true : false}
                    onChange = {(event) => setPassword(event.target.value)} 
                />
                
                {errors.general && (
                   <TypoGraphy variant='body2' color='error' className= {classes.general}>{errors.general}</TypoGraphy>
                )}
                <Button type='submit' variant='contained'  color= 'primary' className= {classes.button}>
                {loading ? <CircularProgress color='secondary' size= {30} className = {classes.progress} /> : 'Login' }
                </Button>
                <br/>
                <small>Don't have an account ? sign up<Link to = '/signup'>hear</Link></small>
                </form>

            </Grid>
            <Grid item sm>
                
            </Grid>
        </Grid>
    )
}

// Login.propTypes = {
//     classes : PropTypes.object.isRequired,
//     loginUser : PropTypes.func.isRequired,
//     user : PropTypes.object.isRequired,
//     UI : PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
    user : state.user,
    UI : state.UI
})

const mapActionsToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyle(style)(Login))
