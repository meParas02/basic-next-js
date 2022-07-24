import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const getServerSideProps = async (context) => {
    const { params } = context
    const { fliterUser } = params
    const responce = await fetch(`https://gorest.co.in/public/v1/users?gender=${fliterUser}`)
    const data = await responce.json()
    return {
        props: {
            apiData: data.data,
            fliterUser,
        }
    }
}

export const About = ({ apiData, fliterUser }) => {
    const router = useRouter()
    return (<>
        <h2>Results for {fliterUser}</h2>
        <Button variant="contained" onClick={() => router.back()} style={{ marginBottom: "10px" }}>&#60; back</Button>
        <Grid container spacing={4}>
            {
                apiData.map((user) => {
                    return (<>
                        <Grid item xs={4} xs={12} md={4}>
                            <Card sx={{ minWidth: 275 }} style={{ textAlign: "center" }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {user.email}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {user.name}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {user.status}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </>)
                })
            }
        </Grid>
    </>
    )
}

export default About
