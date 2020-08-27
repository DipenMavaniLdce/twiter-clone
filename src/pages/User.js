import React ,{useEffect,useState}from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Scream from '../components/scream/Scream'

import {connect} from 'react-redux'
import {getUserData} from '../redux/actions/dataAction'
 import StaticProfile from '../components/profile/StaticProfile'

function User(props) {
    const {data : {screams,loading} ,getUserData} = props
    const [profile,setProfile] = useState({})
    useEffect(() => {
        const handle = props.match.params.handle
        getUserData(handle)
        axios.get(`/user/${handle}`)
        .then((res) => {
            setProfile(res.data.user)
        })
      .catch((err) => console.log(err));
       },[])

    return (
       <Grid container spacing={2} disable={true}>
           <Grid item sm={8} xs = {12}>
              {!loading ? screams === null ? (<p>user has not posted any scram yet</p>)  : (
             screams.map((scream) => <Scream key ={scream.Screamid} scream = {scream} />)
             ) : <p>loading.....</p>}
            </Grid>
            <Grid item sm={4} xs = {12}>
                <StaticProfile profile = {profile} />
            </Grid>  
       </Grid>
    )
}

const mapStateToProps = (state) => ({
    data : state.data,
    
})

const mapActionsToProps = {
    getUserData
}

export default connect(mapStateToProps,mapActionsToProps)(User)
