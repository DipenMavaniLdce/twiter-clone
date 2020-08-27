import React ,{useState,useEffect}from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import {connect} from 'react-redux'
import {commentOnScream} from '../../redux/actions/dataAction'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress'
const styles = (theme) => ({
    ...theme.spreadThis,
    progressSpinner: {
        position: 'absolute'
      },

})
function CommentFrom({classes,commentOnScream,authenticated,UI : {errors,loading},Screamid}) {
    const [body, setBody] = useState('')
    const commentData = {
        body : body
    }
    const handlePostComment = (event) => {
        event.preventDefault();
        commentOnScream(Screamid,commentData)
        setBody('')
    }
    let commentform  =  authenticated ? ( 
        <Grid item sm={12} style={{ textAlign: 'center' }}>
        <form onSubmit={handlePostComment}>
            <TextField
                    className= {classes.textfield}
                    id="body"
                    label="comment"
                    multiline
                    row= "3"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    placeholder = 'comment'
                    value = {body}
                    helperText={errors.comment}
                    error = {errors.comment ? true : false}
                    onChange = {(event) => setBody(event.target.value)} 
                />
                <Button
                type="submit"
                variant="contained"
                color="primary"
                >
                Submit
                </Button>
            </form>
            </Grid>
        ) : null 
    return commentform
}

const mapStateToProps = (state) => ({
    UI : state.UI,
    authenticated : state.user.authenticated
})

const mapActionsToProps = {
    commentOnScream,
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(CommentFrom))
