import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import Filter from "./Components/Filter"
import {apiUrl, filterData} from "./data"
import { toast } from 'react-toastify' ;
import Spinner from "./Components/Spinner";


const App=()=>{
  const [courses, setCourses]=useState([])
  const[loading, setLoading]=useState(true);
  const[category, setCategory]=useState(filterData[0].title);
  async function fetchData(){
    setLoading(true);
    try {
      let response=await fetch(apiUrl);
      let output=await response.json();
      setCourses(output.data); 
    } 
    catch (error) {
      toast.error("Something went wrong")
      
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])
  return(
    <div className="flex flex-col min-h-screen">
      <div>
      <Navbar/>
      </div>
      <div className="bg-bgDark2">
      <div>
        <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="flex mx-auto justify-center items-center min-h-[50vh] max-w-[1200px] w-11/12 flex-wrap " >
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}
            category={category}
          />)
        }
      </div>
      
      </div>
     
    
    </div>
  )
};

export default App;
