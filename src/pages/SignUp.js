import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import withStyle from '@material-ui/core/styles/withStyles'

import Grid from '@material-ui/core/Grid'
import LoginIcon from '../images/login.png'
import TypoGraphy from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import CircularProgress from '@material-ui/core/CircularProgress'

import  {connect} from 'react-redux'
import {signUp} from '../redux/actions/userAction'
const style = (theme) => ({
    ...theme.spreadThis
})
function SignUp( {classes,history,UI :{loading,errors}}) {
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [handle,setHandle]=useState('')

    const userData = {
        email : email,
        password : password,
        confirmPassword : confirmPassword,
        handle : handle
    }
    
    const handleSubmit = (event) => {
        
        event.preventDefault()
        signUp(userData,history)
        
    }
    
    return (
        <Grid container className = {classes.form} >
            <Grid item sm></Grid>
            <Grid item sm >
                <img src={LoginIcon} alt = 'sign up' className = {classes.image}></img> 
                <TypoGraphy variant='h3' >SIgnUp</TypoGraphy>
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
                    id="username"
                    label="username"
                    variant="outlined"
                    color="primary"
                    helperText={errors.handle}
                    error = {errors.handle ? true : false}
                    onChange = {(event) => setHandle(event.target.value)} 
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
                <TextField
                    className= {classes.textfield}
                    id="confirmpassword"
                    label="confirmpassword"
                    variant="outlined"
                    color="primary"
                    helperText={errors.confirmPassword}
                    error = {errors.confirmPassword ? true : false}
                    onChange = {(event) => setConfirmPassword(event.target.value)} 
                />
                
                {errors.general && (
                   <TypoGraphy variant='body2' color='error' className= {classes.general}>{errors.general}</TypoGraphy>
                )}
                <Button type='submit' variant='contained'  color= 'primary' className= {classes.button}>
                {loading ? <CircularProgress color='secondary' size= {30} className = {classes.progress} /> : 'SignUp' }
                </Button>
                <br/>
                <small>Already have an account ? login <Link to = '/login'>hear</Link></small>
                </form>

            </Grid>
            <Grid item sm>
                
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    user : state.user,
    UI : state.UI
})

const mapActionsToProps = {
    signUp
}


export default connect(mapStateToProps,mapActionsToProps)(withStyle(style)(SignUp))
