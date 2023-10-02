import {
  useRouter
} from "next/router";

const Courses = ()=>{
  const router = useRouter();
  const url = router.query;
  const design = (
    <>
      <h1>{url.courseName}</h1>
      <h1>{url.price}</h1>
      <h1>{url.title}</h1>

    </>
  );
  return design;
}

export default Courses;
