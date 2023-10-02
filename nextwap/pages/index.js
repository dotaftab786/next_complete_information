import Layout from "../cmp/Layout/Layout";
import Image from "next/Image";
const Index = ()=>{
  const design = (
    <>
      <Layout pageTitle="Homepage">
        <h1>Homepage</h1>
        <Image src="/pixel.jpg" width={720} height={480} />
      </Layout>
    </>
  );
  return design;
}

export default Index;
