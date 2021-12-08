
import { Grid } from '@material-ui/core';

//components
import Post from './Post';

const Posts = () => {
    // const [posts, getPosts] = useState([]);
    // const { search } = useLocation();

    // useEffect(() => {
    //     const fetchData = async () => { 
    //         let data = await getAllPosts(search); // params in url
    //         getPosts(data);
    //     }
    //     fetchData();
    // }, [search]);

    let posts=[1,2,3,4,5,6,7,8,9];

    return (

            posts.map(post=>(
                <Grid item lg={3} sm={4}  xs={12}>
                    <Post/>
                </Grid>

            ))
               
            

    )
}

export default Posts;   