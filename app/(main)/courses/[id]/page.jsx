import React from "react";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import { getCourseDetails } from "@/queries/courses";
 
const SingleCoursePage = async ({ params: {id} }) => {
    const course = await getCourseDetails(id);
    console.log(course);
  return (
    <>
      <CourseDetailsIntro/>

      <CourseDetails/>

      <Testimonials/>

      <RelatedCourses/>
    </>
  );
};
export default SingleCoursePage;
