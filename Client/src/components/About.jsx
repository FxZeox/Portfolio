import React from 'react';

export default function About() {
  // static about me text
  const bio = `My name is Usman Ahmad, and I am a Software Engineering graduate with a strong passion for DevOps and cloud technologies. I enjoy designing efficient systems, automating workflows, and building reliable CI/CD pipelines to ensure smooth and scalable deployments. DevOps is not just a profession for me — it’s a mindset of continuous improvement, collaboration, and innovation. My goal is to become a skilled DevOps Engineer who builds secure, high-performance infrastructure that accelerates development and creates real-world impact.`;

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          {bio}
        </p>
      </div>
    </section>
  );
}
