import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import productStyle from "../../styles/Product.module.css"
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((curElem) => {
    return {
      params: {
        productId: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.productId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      apiData: data,
    },
  };
};  


const MyData = ({ apiData }) => {
  const router = useRouter()
  const { id, title, body } = apiData;
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
        <Paper elevation={3}>
          <div className={productStyle.paper}>
            <h3>{id}</h3>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </Paper>

      </Box>
      <div style={{ textAlign: "center" }}>
        <Button variant="contained" onClick={() => router.back()}>&#60; back</Button>
      </div>

    </>
  );
};

export default MyData;
