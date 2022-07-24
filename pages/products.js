import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import productStyle from "../styles/Product.module.css"
import Link from "next/link";
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';

export const getStaticProps = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await responce.json();
    return {
        props: {
            apiData: data.slice(0, 10),
        }
    }
}

export const Products = ({ apiData }) => {
    const router = useRouter()
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Products</h2>

            <Button variant="contained" onClick={() => router.reload()}><ReplayIcon /></Button>
            {
                apiData.map((products, i) => {
                    return (
                        <>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-around',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 700,
                                    },
                                }}
                            >
                                <Paper >
                                    <Link href={`products/${products.id}`} passHref>
                                        <div className={productStyle.titleBlock}>
                                            <div className={productStyle.productsId}>{products.id}</div>
                                            <div className={productStyle.productsTitle}>{products.title}</div>
                                        </div>
                                    </Link>
                                </Paper>
                            </Box>

                        </>
                    )
                })
            }
        </div >
    )
}

export default Products
