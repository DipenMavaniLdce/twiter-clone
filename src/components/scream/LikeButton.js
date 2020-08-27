import React,{Fragment} from 'react'
import {connect} from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ToolButton from '../../utils/ToolButton'
import {Link} from 'react-router-dom'
import {likeScream,unlikeScream} from '../../redux/actions/dataAction'
 function LikeButton({user,Screamid,unlikeScream,likeScream,LikeCount}) {
    const isLiked = () => {
        if(user.likes && user.likes.find(like => like.Screamid === Screamid)){

            return true
        }else {
            return false
        }
    }
    
    let likeButton = user.authenticated ? (
        <Fragment>
        {isLiked() ? (
            <Fragment> 
            <ToolButton tip = 'unlike' onClick={() => unlikeScream(Screamid)}>
                <FavoriteIcon color = 'primary' />
            </ToolButton>
            
            </Fragment>
        ) : (
            <Fragment>
            <ToolButton tip = 'like' onClick = {() => likeScream(Screamid)}>
            <FavoriteBorderIcon color = 'primary' />
            </ToolButton> 
            
            </Fragment>  
        ) } 
        </Fragment>

    ) : (
        <Fragment>
        <ToolButton tip = 'login befor like'>
            <Link to = '/login'>
            <FavoriteBorderIcon color = 'primary' />
            </Link>
        </ToolButton>
        </Fragment>
    )
    
    return likeButton
}

const mapStateToProps = (state) => ({
    user: state.user
  });
  
  const mapActionsToProps = {
    likeScream,
    unlikeScream
  };
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(LikeButton);


