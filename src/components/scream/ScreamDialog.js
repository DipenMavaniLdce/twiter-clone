import React, {Fragment, useState , useEffect}from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getScream , clearErrors} from '../../redux/actions/dataAction'
import withStyles from  '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Comments from './Comments'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import dayjs from 'dayjs'
import CommentFrom from './CommentFrom'

import DialogTitle from '@material-ui/core/DialogTitle';

import ToolButton from '../../utils/ToolButton'
import AddIcon from '@material-ui/icons/Add'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloseIcon from '@material-ui/icons/Close';
import UnfoldMore from '@material-ui/icons/UnfoldMore'
import { Typography } from '@material-ui/core'
import LikeButton from './LikeButton'
import CommentIcon from '@material-ui/icons/Comment'



const styles = (theme) => ({
    ...theme.spreadThis,
      closeButton: {
        position: 'absolute',
        left: '91%',
        top: '6%'
      },
      profileImage : {
        maxWidth : '100%',
        objectFit : 'cover',
        borderRadius : '50%'
      },
      spinnerDiv: {
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50
      },
     
      dialogContent : {
          padding : 20,
      }


})

function ScreamDialog({classes,getScream,clearErrors,Screamid,scream : {body , createdAt , imageUrl , userHandle , likeCount , commentCount ,comments} ,UI : {loading , errors}}) {
    const [open, setOpen] = useState(false)
    
    const handleClickOpen = () => {
        setOpen(true)
        getScream(Screamid)
    }
    const handleClose = () => {
        clearErrors()
        setOpen(false)
    }

    const griddialog = loading ? (
        <div className={classes.spinnerDiv}>
        <CircularProgress size={200} thickness={2} />
      </div> 
    ) : (
        <Grid container spacing = {3}>
            <Grid item sm = {5}>
                <img src= {imageUrl} alt="profile" className = {classes.profileImage}></img>
            </Grid>
            <Grid item sm = {7}>
                <Typography 
                component = {Link}
                color = 'primary'
                varient = 'h5'
                to = {`users/${userHandle}`}
                >
                    @{userHandle}
                </Typography>
                <hr className = {classes.sepreator}/>
                <Typography variant= 'body2' >
                    {dayjs(createdAt).format('h:mm a,MMMM DD YYYY')}
                </Typography>
                <hr className = {classes.sepreator}/>
                <Typography variabt = 'body1'>
                    {body}
                </Typography>
                <LikeButton Screamid={Screamid}  LikeCount={likeCount}/>
                <span>{likeCount} Likes</span>
                <ToolButton tip="comments">
                    <CommentIcon color="primary" />
                </ToolButton>
                <span>{commentCount} comments</span>
                <CommentFrom Screamid= {Screamid}></CommentFrom>  


                
            </Grid>

            <Comments comments= {comments} />
       </Grid>
    )
    
   
    
    return (
        <Fragment>
            <ToolButton tip = 'about' place = 'top' onClick= {handleClickOpen}>
                <UnfoldMore color= 'primary' />
            </ToolButton>
            <Dialog open={open} onClose={handleClose} fullWidth
                aria-labelledby="form-dialog-title">
             <ToolButton
            tip="Close"
            onClick={handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
            </ToolButton>      
            <DialogTitle id="form-dialog-title">Scream Detail</DialogTitle>
            
            <DialogContent className={classes.dialogContent}>
            {griddialog}

            
            </DialogContent>
      </Dialog>
        </Fragment>

    )
}

const mapStateToProps =(state) => ({
    UI : state.UI,
    scream : state.data.scream 
})

const mapActionsToProps = {
    getScream,
    clearErrors
}
export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(ScreamDialog))
