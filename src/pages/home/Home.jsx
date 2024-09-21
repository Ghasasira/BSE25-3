import React from "react";
// import { ProfileTile } from "../../components/profile/ProfileTab";
import { Card } from "../../components/blog/Card";
import { ProjectSummary } from "../../components/project-summary/ProjectSummary";
import { teamMembers, projectDetails } from "../../assets/data/data";

export const Home = () => {
  const user=teamMembers[0];
  return (
    <>
      {/* <Category /> */}
      {/* <ProfileTile user={user}/> */}
      <ProjectSummary projectData={projectDetails}/>

      <Card title="Project Updates"/>
    </>
  );
};
