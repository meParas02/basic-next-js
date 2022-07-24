import Link from "next/link";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export const getStaticProps = async () => {
    const responce = await fetch("https://gorest.co.in/public/v1/users")
    const data = await responce.json();
    return {
        props: {
            apiData: data.data
        }
    }
}

export const User = ({ apiData }) => {
    const genderFilter = ["male", "female"]
    return (
        <div>
            <h2>About Page</h2>
            {
                genderFilter.map((gender, i) => {
                    return (
                        <Link href={`/user/${gender}`} passHref key={i}>
                            <Button variant="outlined" style={{ marginRight: "5px" }}>{gender}</Button>
                        </Link>
                    )
                })
            }
            <Grid container spacing={2}>
                {
                    apiData.map((user, i) => {
                        return (
                            <Grid item xs={6} xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                            m: 1,
                                            width: 700
                                        },
                                    }}
                                >
                                    <Paper elevation={3} style={{ display: "flex", alignItems: "center" }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ heigth: "30px", margin: "0px 10px" }} />
                                        <div key={i}>
                                            <p>{user.name} | {user.email}</p>
                                        </div>
                                    </Paper>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default User