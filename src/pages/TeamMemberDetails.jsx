import {ProfileTile} from "../components/profile/ProfileTab";
import { Card } from "../components/blog/Card";
import { teamMembers } from "../assets/data/data";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const TeamMemberDetails=()=>{

    const { id } = useParams(); // Get the 'id' from the route parameter
    
    // const memberData = teamMembers;
    const[user,setUser]=useState("");
    // '';

    useEffect(() => {
        if(id==="Joshua"){
            setUser(teamMembers[0]);
        } else if(id==="Brian"){
            setUser(teamMembers[1]);
        }else if(id==="Daniel"){
            setUser(teamMembers[2]);
        }else if(id==="Josephine"){
            setUser(teamMembers[3]);
        }
    }, [id]);
    

    return(
        <>
        <ProfileTile user={user}/>
        {/* <div className="w-full text-center"><h1>Contributions</h1></div> */}
        <Card title="Contributions"/>
        </>
    );
};