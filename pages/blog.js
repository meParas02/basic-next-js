import Link from "next/link";
import Grid from '@mui/material/Grid';

export const getStaticProps = async () => {
    const responce = await fetch("http://localhost:3000/data")
    const data = await responce.json();
    return {
        props: {
            apiData: data
        },
        revalidate: 10,
    }
}

export const Blog = ({ apiData }) => {
    return (
        <div>
            <h2>Blog Page</h2>
            <Grid container spacing={2}>
                {
                    apiData.map((user, i) => {
                        return (
                            <Grid item xs={3} xs={12} md={3}>
                                <Link href={`/blog/${user.id}`} key={user.id} passHref>
                                    <div key={user.id} style={{ cursor: "pointer" }}>
                                        <p>Email: {user.email}</p>
                                        <p>First Name:  {user.first_name}</p>
                                        <p>Age: {user.age}</p>
                                    </div>
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Blog
