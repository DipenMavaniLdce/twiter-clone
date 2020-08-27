export default {

        palette: {
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },

    spreadThis:{
        typography:{
            useNextVarients : true
        },
        form:{
            textAlign : 'center'
        } ,
        image:{
            margin : '20px auto 20px auto',
            width : 50,
            height : 50,
    
        },
        pagetitle : {
            margin :"20px auto 20px auto",
    
        },
        textfield:{
           margin :"10px auto 10px auto",
           
    
        },
        button:{
            margin :"10px 20px 10px auto",
            width : '50%'
        },
        progress:{
        },
        sepreator : {
            border : 'none',
            margin : 5
        } ,
        visibaleSeparator : {
           width : '100%',
           borderBottom : '1px solid rgb(0,0,0,0.1)',
           marginBottom : 20
        },
        paper: {
            margin : 'auto 10px auto 10px',
            
            padding : '5%'
            },
            profile: {
              '& .image-wrapper': {
                textAlign: 'center',
                position: 'relative',
                '& button': {
                  position: 'absolute',
                  top: '80%',
                  left: '70%'
                }
              },
              '& .profile-image': {
                width: 200,
                height: 200,
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '50%'
              },
              '& .profile-details': {
                textAlign: 'center',
                '& span, svg': {
                  verticalAlign: 'middle'
                },
                '& a': {
                  color: '#00bcd4'
                }
              },
              '& hr': {
                border: 'none',
                margin: '0 0 10px 0'
              },
              '& svg.button': {
                '&:hover': {
                  cursor: 'pointer'
                }
              }
            },
            buttons: {
              textAlign: 'center',
              '& a': {
                margin: '20px 10px'
              }
            }
    }
}