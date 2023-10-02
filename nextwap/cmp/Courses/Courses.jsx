import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography
} from "@mui/material";

import Link from "next/Link";
const Courses = ()=>{

  const myCourses = [
    {
      id: 1,
      title: "React js",
      desc: "Lizards are a widespread group of squamate reptiles with over",
      price: 3000,
      link:"courses/react"
    },
    {
    id: 2,
    title: "Angular js",
    desc: "Lizards are a widespread group of squamate reptiles with over",
    price: 2000,
    link:"courses/angular"
  },
  {
    id: 3,
    title: "React Native",
    desc: "Lizards are a widespread group of squamate reptiles with over",
    price: 5000,
    link:"courses/react-native"
  },
  {
    id: 4,
    title: "Node js",
    desc: "Lizards are a widespread group of squamate reptiles with over",
    price: 5000,
    link:"courses/nodejs"
  }
];

  const NewCourses = ({course})=>{
    const tmp = (
      <>
        <Grid item sm={4} xs={12}>
         <Card sx={{p:3, mb: 4}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {course.desc}
                </Typography>
              </CardContent>
             <CardActions>
             <Link href={
               {
                 pathname:course.link,
                 query:{
                   id: course.id,
                   title: course.title,
                   price: course.price
                 }
               }
             }>
              <Button variant="contained" color="secondary">Syllabus</Button>
              </Link>
            </CardActions>
         </Card>
        </Grid>
      </>
    );
    return tmp;
  }
  const design = (
    <>
      <Container>
      <Typography variant="h4">Courses</Typography>
        <Grid container spacing={3} sx={{mb:4}}>
        {
         myCourses.map((item)=>{
           return <NewCourses key={item.id} course={item} />
         })
       }
        </Grid>
      </Container>
    </>
  );
  return design;
}

export default Courses;
