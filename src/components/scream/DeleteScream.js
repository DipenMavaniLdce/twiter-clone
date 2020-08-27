import React ,{Fragment,useState} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import {connect} from 'react-redux'
import {deleteScream } from '../../redux/actions/dataAction'



//Dialog
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

//icons

import DeleteOutline  from '@material-ui/icons/DeleteOutline'
import ToolButton from '../../utils/ToolButton'


const styles = (theme) => ({
    ...theme.spreadThis,
    deleteButton: {
        position: 'absolute',
        left: '90%',
        top: '10%'
      }
})
function DeleteScream({classes,Screamid,deleteScream}) {
    const [open, setOpen] = useState(false)
    
    
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleDelete = () => {
        deleteScream(Screamid)
        setOpen(false)
    }
    
    return (
        <Fragment>
            <ToolButton tip= 'Delete Scream' place = 'top' btnClassName= {classes.deleteButton} onClick = {handleClickOpen}>
                <DeleteOutline color='secondary'></DeleteOutline>
            </ToolButton>
            <Dialog open={open} onClose={handleClose} fullWidth
                maxWidth="sm" aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Are you sure you want to delete scream?</DialogTitle>
            <DialogActions>
                <Button variant="contained" onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button variant="contained" onClick={handleDelete} color="secondary">
                    Delete
                </Button>
            </DialogActions>
            </Dialog>
        </Fragment>

    )
}

const mapStateToProps = (state) => ({
    data : state.data
})


export default connect(mapStateToProps,{deleteScream})(withStyles(styles)(DeleteScream))
