import React ,{Fragment,useState,useEffect} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

import {connect} from 'react-redux'
import {updateUserDetails} from '../../redux/actions/userAction'

//Dialog
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

//icons

import EditIcon from '@material-ui/icons/Edit'

import ToolButton from '../../utils/ToolButton'


const styles = (theme) => ({
    ...theme.spreadThis,
    button: {
       float : 'right'
    }
})
function UpdateUserDetails({classes,credentials,updateUserDetails}) {
    const [open, setOpen] = useState(false)
    const [bio, setBio] = useState('')
    const [location, setLocation] = useState('')
    const [website, setWebsite] = useState('')
    
    const userDetail = {
        bio : bio,
        location : location,
        website  : website
    }
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleUpdate = () => {
        updateUserDetails(userDetail)
        setOpen(false)
    }
    const updateState = (credentials) => {
        setBio(credentials.bio)
        setLocation(credentials.location)
        setWebsite(credentials.website)
    }
    useEffect(() => {
        updateState(credentials)     
    },[credentials]) 
    
    return (
        <Fragment>
            <ToolButton tip= 'Edit Bio' place = 'top' btnClassName= {classes.button} onClick = {handleClickOpen}>
                <EditIcon color = 'primary'  />
            </ToolButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Bio</DialogTitle>
            <DialogContent>
            <TextField
                    className= {classes.textfield}
                    id="bio"
                    label="bio"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value = {bio}
                    onChange = {(event) => setBio(event.target.value)} 
                />
                <TextField
                    className= {classes.textfield}
                    id="location"
                    label="location"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value = {location}
                    onChange = {(event) => setLocation(event.target.value)} 
                />
                <TextField
                    className= {classes.textfield}
                    id="website"
                    label="website"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value = {website}
                    onChange = {(event) => setWebsite(event.target.value)} 
                />
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button variant="outlined" onClick={handleUpdate} color="primary">
                    Update
                </Button>
            </DialogActions>
      </Dialog>
        </Fragment>

    )
}

const mapStateToProps = (state) => ({
    credentials : state.user.credentials
})

const mapActionsToProps = {
    updateUserDetails
    
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(UpdateUserDetails))
