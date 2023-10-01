import {
  useRouter
} from "next/router";

const Courses = ()=>{
  const router = useRouter();
  const { courseName } = router.query;
  const design = (
    <>
      <h1>{courseName}</h1>
    </>
  );
  return design;
}

export default Courses;
