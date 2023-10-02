import Layout from "../cmp/Layout/Layout";
import Image from "next/Image";
import axios from "axios";

const Index = ({data})=>{
  const design = (
    <>
      <Layout pageTitle="Homepage">
        <h1 className="text-danger">{data.title}</h1>
        <Image src="/pixel.jpg" width={720} height={480} />
      </Layout>
    </>
  );
  return design;
}

export default Index;

// static prerendering

export const getStaticProps = async ()=>{
  const response = await axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/1"
  });
  return {
    props: {
      data: response.data
    }
  }
}

// server side prerendering

// export const getServerSideProps = async ()=>{
//   const response = await axios({
//     method: "get",
//     url: "https://jsonplaceholder.typicode.com/todos/1"
//   });
//   return {
//     props: {
//       data: response.data
//     }
//   }
// }
