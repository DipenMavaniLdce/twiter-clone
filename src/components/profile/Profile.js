import React, { Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import UpdateUserDetails from './UpdateUserDetails'

//redux
import {connect } from 'react-redux'
import {uploadImage,logOut} from '../../redux/actions/userAction'

import Skeleton from '@material-ui/lab/Skeleton';

//mui stuff
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import MuiLink  from '@material-ui/core/Link'

import TypoGraphy from '@material-ui/core/Typography'

//icon
import LocationOn from '@material-ui/icons/LocationOn'
import CalendarToday from '@material-ui/icons/CalendarToday'
import KeyboardReturn from '@material-ui/icons/KeyboardReturn'
import LinkIcon from '@material-ui/icons/Link'
import EditIcon from '@material-ui/icons/Edit'


import ToolButton from '../../utils/ToolButton'

const styles = (theme) => ({
   ...theme.spreadThis,
})
function Profile({
        classes,
        user : {
            loading ,
            authenticated,
            credentials : {handle , createdAt , bio, imageUrl , website , location}
        },
        uploadImage,
        logOut
    }){
        const handleImageChange =(event) => {
            const image = event.target.files[0]
            const formData = new FormData()
            formData.append('image',image,image.name)
            uploadImage(formData)

        }
        const handleEditPicture = () => {
          document.getElementById('imageInput').click()

        }
        let profileMarkup = !loading ? (authenticated ? (
        <Paper className = {classes.paper}>
            <div className = {classes.profile}>
                <div className = "image-wrapper">
                    <img src = {imageUrl} className = "profile-image" alt = 'ProfileImage'></img>
                    <input
                     type = 'file'
                     id = 'imageInput'
                     hidden = 'hidden'
                     onChange= {handleImageChange} 
                    />
                    <ToolButton tip= 'Edit profile Image' place = 'top' btnClassName='button' onClick= {handleEditPicture}>
                      <EditIcon color = 'primary' />
                    </ToolButton>
                   
                   

                </div>
                <hr/>
                <div className = 'profile-details'>
                    <MuiLink component= {Link} to={`/users/${handle}`} color = 'primary' varient ='h5'>
                        @{handle}
                    </MuiLink>
                    <hr/>
                    {bio && <TypoGraphy variant= 'body2'>{bio}</TypoGraphy>}
                    <hr/>
                    {location && (
                        <Fragment>
                            <LocationOn color = 'primary' />
                            <span>{location}</span>
                            <hr />
                        </Fragment>
                    )}
                     {website && (
                        <Fragment>
                            <LinkIcon color = 'primary' />
                            <a href={website} target='_blank' rel = 'noopener noreferrer'>{' '}{website}</a>
                            <hr />
                        </Fragment>
                    )}
                    <CalendarToday color = 'primary'/>{' '}
                     <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>

                </div>
                <ToolButton tip= 'logOut' place = 'top' onClick= {() => logOut()}>
                    <KeyboardReturn color = 'primary'></KeyboardReturn>
                </ToolButton>
                <UpdateUserDetails />


            </div>
        </Paper> ):(
        
        <Paper className = {classes.paper}>
            <TypoGraphy varient= 'body2' align = 'center'>
                No profile found, please login again
            </TypoGraphy>
            <div className={classes.buttons}>
                <Button variant= 'contained' color = 'primary' component={Link} to= '/login' >Login</Button>
                <Button variant= 'contained' color = 'secondary' component={Link} to= '/signup' >SignUp</Button>

            </div>

        </Paper> 
        ) ):(
          <Skeleton variant="rect" animation="wave" width={279} height={448} />)

        
        return profileMarkup 
}

const mapStateToProps = (state) => ({
  user : state.user,
 
})

const mapActionsToProps = { logOut, uploadImage };



export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Profile));
