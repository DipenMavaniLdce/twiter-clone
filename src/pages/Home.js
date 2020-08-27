import React ,{useEffect}from 'react'
import Grid from '@material-ui/core/Grid'

import Scream from '../components/scream/Scream'
import Profile from '../components/profile/Profile'

import {connect} from 'react-redux'
import {getScreams} from '../redux/actions/dataAction'
 
function Home({data : {screams,loading},getScreams}) {
    useEffect(() => {
        getScreams() 
       },[getScreams])
    return (
       <Grid container spacing={2} disable={true}>
           <Grid item sm={8} xs = {12}>
              {!loading ?(
             screams.map((scream) => <Scream key ={scream.Screamid} scream = {scream} />)
             ) : <p>loading.....</p>}
            </Grid>
            <Grid item sm={4} xs = {12}>
                <Profile />
            </Grid> 
       </Grid>
    )
}

const mapStateToProps = (state) => ({
    data : state.data,
    
})

const mapActionsToProps = {
    getScreams
}

export default connect(mapStateToProps,mapActionsToProps)(Home)
