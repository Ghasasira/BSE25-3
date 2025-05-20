import {ProfileTile} from "../components/profile/ProfileTab";
import { Card } from "../components/blog/Card";
import { teamMembers } from "../assets/data/data";
import { blog } from "../assets/data/data";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const TeamMemberDetails=()=>{

    function filterBlogsByPerson(blogsArray, personName) {
        // Convert person name to lowercase for case-insensitive comparison
        const searchName = personName.toLowerCase();
        
        return blogsArray.filter(blog => {
          // Convert completedBy to lowercase and check if it includes the person's name
          const completedBy = blog.completedBy.toLowerCase();
          
          // Handle both individual assignments and group tasks where the person might be mentioned
          return completedBy === searchName || 
                 (completedBy === "group" && blog.desc.toLowerCase().includes(searchName));
        });
      }

    const { id } = useParams(); // Get the 'id' from the route parameter
    
    // const memberData = teamMembers;
    const[user,setUser]=useState("");
    const[blogg,setBlogg]=useState([]);
    // '';

    useEffect(() => {
        if(id==="Joshua"){
            setUser(teamMembers[0]);
            setBlogg(filterBlogsByPerson(blog, "Joshua"));
        } else if(id==="Brian"){
            setUser(teamMembers[1]);
            setBlogg(filterBlogsByPerson(blog, "Brian"));
        }else if(id==="Daniel"){
            setUser(teamMembers[2]);
            setBlogg(filterBlogsByPerson(blog, "Daniel"));
        }else if(id==="Josephine"){
            setUser(teamMembers[3]);
            setBlogg(filterBlogsByPerson(blog, "Josephine"));
        }
    }, [id]);
    

    return(
        <>
        <ProfileTile user={user}/>
        {/* <div className="w-full text-center"><h1>Contributions</h1></div> */}
        <Card title="Contributions" blogs={blogg}/>
        </>
    );
};