import { createContext, useEffect, useState, useMemo } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const navigate =useNavigate();
    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);
    const[enrolledCourses,setEnrolledCourses]=useState([])

    const calculaterating = (course) => {
        if(course.courseRatings.length===0){
            return 0;
        }
        let total = 0;
        course.courseRatings.forEach((review) => {
            total += review.rating;
        });
        return total / course.courseRatings.length;
    }

const calculateChapterTime =(chapter)=>{
    let time=0
    chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration)
    return humanizeDuration(time*60*1000,{units:['h','m']})
}

const courseDuration=(course)=>{
    let time=0
    course.courseContent.map((chapter)=>chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration))
    return humanizeDuration(time*60*1000,{units:['h','m']})
}
const calculateNoofLectures=(course)=>{
    let lectures=0
    course.courseContent.forEach(chapter=>{ if(Array.isArray(chapter.chapterContent)){
        lectures+=chapter.chapterContent.length
    }
    });
    return lectures
}


const fetchUserEnrolledCourese=async()=>{
setEnrolledCourses(dummyCourses)
}
    useEffect(() => {
        setAllCourses(dummyCourses);
        fetchUserEnrolledCourese()
    }, []);

    const value = useMemo(() => ({ currency, allCourses,navigate ,calculaterating,isEducator,setIsEducator,calculateNoofLectures,calculateChapterTime,courseDuration,enrolledCourses,setEnrolledCourses,fetchUserEnrolledCourese }), 
    [currency, allCourses,navigate,calculaterating,isEducator,setIsEducator,calculateNoofLectures,calculateChapterTime,courseDuration,enrolledCourses,setEnrolledCourses,fetchUserEnrolledCourese]);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
