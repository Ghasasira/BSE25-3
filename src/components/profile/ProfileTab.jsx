import React from "react";
import {Props} from "react";

export const ProfileTile = (props) => {
    // const user = {user};
    const skills = props.user.skills || [];
    return(
        <>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="md:flex md:flex-row">
                        <div className="sm:w-full md:w-[30%] max-h-[280px] m-5 p-4">
                            <img className="img-fluid rounded w-[300px] max-h-[250px] object-cover" src={props.user.picture} alt=""/>
                        </div>
                        <div className="sm:w-full md:w-[60%]">
                            <h1 className="mb-4">{props.user.name}</h1>
                            <p>{props.user.shortStory}</p>
                            <div className="m-2 md:flex md:flex-roww-full">
                                <div className="md:mr-10">
                                    <div className="col-sm-6 py-2"><h6>Course: <span className="font-bold">BSSE</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Role: <span className="font-bold">{props.user.role}</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Student No: <span className="font-bold">{props.user.student_number}</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Experience: <span className="font-bold">3 Years</span></h6></div>
                                </div>
                                <div className="md:ml-10">
                                <div className="col-sm-6 py-2"><h6>Phone: <span className="font-bold">{props.user.phone}</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Email: <span className="font-bold">{props.user.email}</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Skills: <span className="font-bold">{skills.length > 0 ? skills.join(", ") : "No skills available"}</span></h6></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}