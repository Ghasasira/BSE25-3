import React from "react";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category";
import { ProjectSummary } from "../../components/project-summary/ProjectSummary";

export const Home = () => {
  return (
    <>
      {/* <Category /> */}
      <ProjectSummary/>

      <Card />
    </>
  );
};
