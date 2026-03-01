import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <div className="container-custom px-4">
    <h2 className="text-2xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard
        title="MealMend"
        description="MealMend: Collects waste food, donates, recycles into compost, supports communities."
        tech="Html, CSS, JS"
        image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=60"
        link="https://github.com/Sonukr2006/MealMend-Backend"
      />
      <ProjectCard
        title="Auto-genr-Pass"
        description="Small utility project"
        tech="React"
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60"
      />
      <ProjectCard
        title="Calculator"
        description="Small utility project"
        tech="React"
        image="https://sharp.net.au/products/el760rblaa-8-digit-pocket-calculator-cream"
        link="https://calculatorsiteproject.netlify.app/"
      />
      <ProjectCard
        title="Markdown Editor"
        description="Small utility project"
        tech="React"
        image="../../public/Screenshot from 2026-01-28 11-00-42.png"
        link="https://mark-down-editor-jade.vercel.app/"
      />
      <ProjectCard
        title="FocusTube"
        description="A focused webapp for students."
        tech="React, Node, Express"
        image="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fit/width:1080/height:720/plain/https://s3-newsifier.ams3.digitaloceanspaces.com/gizchina.com/images/2025-06/imagem-2021-12-19-131842.png@webp"
        link="https://focus-tube-ecru.vercel.app/"
      />
    </div>
  </div>
);

export default Projects;
