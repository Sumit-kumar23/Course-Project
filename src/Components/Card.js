import React from 'react'
import { toast } from 'react-toastify' ;
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
const Card = (props) => {
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;


    function clickHandler(){
         if(likedCourses.includes(course.id)){
            //pehle se liked hua pda h 
            setLikedCourses((prev)=>prev.filter((cid)=> cid!==course.id));  // removes that particular id from likedcourses
            toast.warning("Like removed")
         }
         else{
            if(likedCourses.length==0){
                setLikedCourses([course.id])
            }

            else{
                // naya like 
                setLikedCourses((prev)=>[...prev, course.id ])
            }
            toast.success("Liked successfully")
         }
    }
  return (
    <div className=' w-[300px] bg-bgDark rounded-ms overflow-hidden bg-opacity-80  '>
        <div className='relative '>
            <img src={course.image.url}/>
      
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
            <button onClick={clickHandler}>
                <FcLike  fontSize={"1.75rem"} opacity="50"/>
            </button>
        </div>
        </div>
        <div className='p-4'>
            <p className='text-white leading-6 text-lg font-semibold'>{course.title}</p>
            <p className='mt-2 text-white'>{
           
                course.description.length > 100 ?  (course.description.substr(0,100) ) + "..." : (course.description)
           
            }
                
                </p>

        </div>
    </div>
  )
}

export default Card
