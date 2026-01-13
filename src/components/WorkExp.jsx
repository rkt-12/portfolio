import React from "react";

const WorkExp = () => {
  return (
    <section className="section" id="workExp">
      <div className="px-3 mx-auto lg:px-8 xl:max-w-6xl">
        <div className="headline-2">My Work Experience</div>
        <div className="bg-zinc-800/50 p-5 rounded-2xl md:p-12 flex mb-5 mt-6 flex-col md:flex-row">
          <div className="w-full">
            <div className="text-zinc-50 font-semibold text-3xl pb-2">
              Software Intern - Faralpha Technologies
            </div>
            <div className="text-zinc-400">June 2025 - August 2025</div>
            <div className="text-zinc-400">
              <ul className="list-disc ml-5">
                <li>Deployed a hospital's application VisionAI on AWS Elastic Beanstalk and Amplify.</li>
                <li>Coded and shipped a Node.js API on a Virtual Machine using GitHub Actions CI/CD pipeline.</li>
                <li>Created CI/CD pipelines for a React and Flask application using GCPs standard app engine and Cloudbuild for automateed deployments. </li>
                <li>Migrated the authentication of a FastAPI application from Auth0 to Supabase authentication.</li>
                <li>Developed a multi-tenant WordPress platform integrated with a Django backend API (no database), scaled to 100,000+ users, and connected via RabbitMQ with automated workflows.</li>
              </ul>
            </div>
          </div>
          <div className="pl-4">
            <img
              src="/images/companyLogo.jpeg"
              alt="BIT"
              className="w-60 h-40 rounded-2xl hidden md:block"
            />
          </div>
        </div>
        <div className="bg-zinc-800/50 p-5 rounded-2xl md:p-12 flex mb-5 mt-6 flex-col md:flex-row">
          <div className="w-full">
            <div className="text-zinc-50 font-semibold text-3xl pb-2">
              DSA Intern - Crio.Do
            </div>
            <div className="text-zinc-400">Jan 2026 - Present</div>
            <div className="text-zinc-400">
              <ul className="list-disc ml-5">
                <li>Creation and management of DSA problems on the Crio site.</li>
                <li>Resolving tickets regarding queries of users on fullstack projects.</li>
              </ul>
            </div>
          </div>
          <div className="pl-4">
            <img
              src="/images/crio.jpg"
              alt="BIT"
              className="w-60 h-40 rounded-2xl hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
