import { Box } from "@material-ui/core";


import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";

const home = () => {
    return (
        <>
            <Banner />
            <Box style={{display:"flex"}}>
            <Categories />
            <Posts/>
            </Box>
        </>
    )
}
export default home;