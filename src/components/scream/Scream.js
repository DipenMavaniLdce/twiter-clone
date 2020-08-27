import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import DeleteScream from './DeleteScream'
import ScreamDialog from './ScreamDialog'

import {connect} from 'react-redux'


//icon
import CommentIcon from '@material-ui/icons/Comment';
import ToolButton from '../../utils/ToolButton'
import LikeButton from './LikeButton'

const style = {
    card : {
        position: 'relative',
        display : 'flex',
        marginBottom : 20,

    },
    image : {
        minWidth : 200,
        
    },
    content :{
        padding : 25,
        objectFit : 'cover',
    }
    
}

function Scream(props) {
    const {classes,scream : {body , createdAt , imageUrl , userHandle , Screamid , likeCount , commentCount },user: {authenticated ,credentials : {handle} } } = props
    dayjs.extend(relativeTime)
    let deletButton = (authenticated && userHandle === handle) ? <DeleteScream Screamid = {Screamid} />: null
    return (
        <Card className= {classes.card}>
               

            <CardMedia image = {imageUrl}  title = 'Profile Image' className= {classes.image} />
            <CardContent className = {classes.content}>
            <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
                <span>{deletButton}</span>
                <Typography variant = 'body2' color= 'textSecondary' >{dayjs(createdAt).fromNow()}</Typography>
                <Typography variant = 'body1'>{body}</Typography>
                <LikeButton Screamid={Screamid}  LikeCount={likeCount}/>
                <span>{likeCount} Likes</span>
                <ToolButton tip="comments">
                    <CommentIcon color="primary" />
                </ToolButton>
                <span>{commentCount} comments</span>
                <ScreamDialog Screamid = {Screamid} userHandle = {userHandle}></ScreamDialog>
            </CardContent>
        </Card>

    )
}

const mapStateToProps = (state) => ({
    user : state.user
})



export default connect(mapStateToProps)(withStyles(style)(Scream))
