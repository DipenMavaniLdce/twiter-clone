import React,{Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'
import  {Link} from 'react-router-dom'

const styles = (theme) => ({
    ...theme.spreadThis,
    commentImage: {
        maxWidth : '100%',
        objectFit : 'cover',
        borderRadius : '50%'
    }
})
function Comments({comments,classes}) {
    return (
       <Grid container>
           {comments.map((comment) => {
               const {createdAt,body,imageUrl,userHandle} = comment
               return(
                    <Fragment key = {createdAt}>
                        <hr className = {classes.visibaleSeparator}/>
                        <Grid item sm={12}>
                        
                            <Grid container>
                                <Grid item sm={2}>
                                    <img src= {imageUrl} alt = 'comment' className={classes.commentImage}></img>
                                </Grid>
                                <Grid item sm={9}>
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
                                
                                </Grid>
                            </Grid>

                        </Grid>
                    </Fragment>
               )
           })}
       </Grid>
    )
}

export default withStyles(styles)(Comments)
