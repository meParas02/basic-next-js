import Button from '@mui/material/Button';
import { useRouter } from 'next/router'


export const getStaticPaths = async () => {
    const responce = await fetch("http://localhost:3000/data")
    const data = await responce.json();
    const paths = data.map((ele) => {
        return {
            params: {
                blogId: ele.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.blogId;
    const responce = await fetch(`http://localhost:3000/data/${id}`)
    const data = await responce.json();
    return {
        props: {
            apiData: data
        }
    }
}

export const Blog = ({ apiData }) => {
    const router = useRouter()

    return (
        <div>
            <p>Email: {apiData.email}</p>
            <p>First Name:  {apiData.first_name}</p>
            <p>Age: {apiData.age}</p>
            <Button variant="contained" onClick={() => router.back()}>&#60; back</Button>
        </div>
    )
}

export default Blog
