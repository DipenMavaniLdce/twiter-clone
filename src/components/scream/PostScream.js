import React, {Fragment, useState , useEffect}from 'react'
import {connect} from 'react-redux'
import {postScream,clearErrors} from '../../redux/actions/dataAction'
import withStyles from  '@material-ui/core/styles/withStyles'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

import ToolButton from '../../utils/ToolButton'
import AddIcon from '@material-ui/icons/Add'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
    ...theme.spreadThis,
    submitButton: {
        position: 'relative',
        float: 'right',
        marginTop: 10
      },
      progressSpinner: {
        position: 'absolute'
      },
      closeButton: {
        position: 'absolute',
        left: '91%',
        top: '6%'
      }


})

function PostScream({classes,postScream,clearErrors,UI : {loading , errors}}) {
    const [open, setOpen] = useState(false)
    const [body,setBody] = useState('')
    const userDetail = {
       body : body
    }
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        clearErrors()
        setOpen(false)
    }

    const handlePostScream = (event) => {
        
        event.preventDefault();
        postScream(userDetail)
         
        
    }
    useEffect(() => {
        if(!errors.body && !loading){
            setOpen(false)
        }
    },[loading,errors]) 
    
    
    return (
        <Fragment>
            <ToolButton tip = 'add Post' place = 'top' onClick= {handleClickOpen}>
                <AddIcon color= 'primary' />
            </ToolButton>
            <Dialog open={open} onClose={handleClose} fullWidth
                maxWidth="sm" aria-labelledby="form-dialog-title">
             <ToolButton
            tip="Close"
            onClick={handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
            </ToolButton>      
            <DialogTitle id="form-dialog-title">Post Scream</DialogTitle>
            
            <DialogContent>
            <form onSubmit={handlePostScream}>
            <TextField
                    className= {classes.textfield}
                    id="body"
                    label="body"
                    multiline
                    row= "3"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    placeholder = 'Screems for your buddy'
                    helperText={errors.body}
                    error = {errors.body ? true : false}
                    onChange = {(event) => setBody(event.target.value)} 
                />
                <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
                disabled={loading}
              >
                Submit
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>
            </form>
            </DialogContent>
      </Dialog>
        </Fragment>

    )
}

const mapStateToProps =(state) => ({
    UI : state.UI,
    
})

const mapActionsToProps = {
    postScream,
    clearErrors
}
export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(PostScream))
