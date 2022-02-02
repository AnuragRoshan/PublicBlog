// import { SignalCellularConnectedNoInternet4BarOutlined } from "@material-ui/icons"
// import { InputBase } from "@material-ui/core"
import { Box ,makeStyles,FormControl ,InputBase, Button, TextareaAutosize} from "@material-ui/core"
import { AddCircle } from "@material-ui/icons"
import { useState } from 'react'
import { createpost} from '../../../service/api'
const useStyle=makeStyles((theme)=>({
    image:{
width:'100%',
        height:'50vh',
        objectFit:'cover'
    },
    container:{
        padding:'0 100px',
    },
    form:{
        display:"flex",
        flexDirection:"row",
        marginTop:10,
    },
    textField:{
        flex:1,
        // border:"1px solid grey",
        // borderRadius: '10px 10px 0 0',
        fontSize:25,
        margin:"0 24px"
    },
    textArea:{
        width:'100%',
        marginTop:10,
        fontSize:18,
        border:"none",
        '&:focus-visible':{
            outline:"none"      
        }
    }
}))
const initialvalue={
    title:'',
    description:'',
    picture:'',
    username:'anurag',
    categories:'All',
    createDate:new Date(),

}


const CreateView=()=>{
    const img="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    const classes=useStyle();
    const [post,setPost]=useState(initialvalue);
    const handleChange=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})}
    const savePost= async ()=>{ 
       await createpost(post);
    }
    return(
        <Box className={classes.container}>
            <img src={img} alt="banner" className={classes.image}/>
            <FormControl className={classes.form} >
            <AddCircle fontSize="large" color="action"/>
            <InputBase
            onChange={(e)=>handleChange(e)}
            placeholder="Title" className={classes.textField} name='title'/>
            <Button onClick={()=>savePost()} variant="contained" color="primary">Publish</Button>
        </FormControl>
        <TextareaAutosize
        onChange={(e)=>handleChange(e)}
        rowsMin={5} placeholder="Tell Your Story" 
        className={classes.textArea}
        name='description'
        />
        </Box>
        
    )
}

export default CreateView