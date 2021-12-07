import { Button, makeStyles, Table, TableCell, TableRow, TableBody, TableHead } from "@material-ui/core"
import transitions from "@material-ui/core/styles/transitions";
import { categories } from "../Constants/data";
const useStyle = makeStyles({
    create: {
        margin: 20,
        background: 'silver'
        , color: "#black",
        width: '86%',
        "&:hover": {
            backgroundColor: "white !important",
            transitions: "5ms"
        }
    },
    table: {
        border: "1px solid rgba(224,224,224,1)"
    }
})

const Categories = () => {
    const classes = useStyle();
    return (
        <>
            <Button variant="contained" className={classes.create}>Create Blog</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableCell>
                        All Categories

                    </TableCell>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>

                                    {category}

                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </>
    )
}

export default Categories