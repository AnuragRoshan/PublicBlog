import { Button , makeStyles, Table ,TableCell ,TableRow,TableBody ,TableHead} from "@material-ui/core"

const useStyle=makeStyles({
    create:{
            margin:20,
            background:'#6495Ed'
            ,color:"#fff"
    }
})

const Categories = () => {
    const classes=useStyle();
    return (
        <>
        <Button variant="contained" className={classes.create}>Create Blog</Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        All categories
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Music
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </>
    )
}

export default Categories