import Navbar from "../Navbar/Navbar";
import Head from "next/Head";
const Layout = (data)=>{
  const design = (
    <>
      <Head>
        <title>{data.pageTitle}</title>
      </Head>
      <Navbar />
      <div>
      { data.children }
      </div>
    </>
  );
  return design;
}
export default Layout;
