import React from 'react';
import ExternalLink from '../components/ExternalLink';

export default {
  meta: {
    name: "Jon Ambas",
    title: "UX Engineer",
    email: "jon@jonambas.com",
  },
  skills: [
    "JavaScript",
    "React, Redux",
    "Jest, Enzyme, Cypress",
    "Webpack, Rollup",
    "Sass, CSS",
    "Adobe Creative Suite",
    "Sketch",
  ],
  jobs: [
    {
      company: "SparkPost",
      positions: [
        {
          position: "UX Engineer",
          startDate: "June 2019",
          endDate: "Present",
          experience: [
            "Currently building cool things"
          ]
        },
        {
          position: "Front End Engineer",
          startDate: "October 2016",
          endDate: "June 2019",
          experience: [
            <>
              Worked closely with a distributed team of engineers responsible for
              SparkPost's{" "}
              <ExternalLink to="https://github.com/SparkPost/2web2ui">
                React web application
              </ExternalLink>
            </>,
            <>
              Designed, built, and maintained{" "}
              <ExternalLink to="https://github.com/SparkPost/matchbox">
                Matchbox
              </ExternalLink>{" "}
              — a React component library
            </>,
            "Produce prototypes to support the research, development, and testing of new product features",
            "Provide creative and technical guidance to marketing, product, dev-relations, and other engineering teams on several projects",
          ],
        },
      ],
    },
    {
      position: "Interaction Designer",
      company: "Polymath Innovations",
      startDate: "August 2015",
      endDate: "October 2016",
      experience: [
        "Worked closely with a distributed team of engineers and designers to build Laravel applications",
        "Produced wireframes and prototypes using Sketch, Invision, and After Effects",
        "Designed and created branding concepts, logos, and style guides",
        "Provided technical direction to other developers to assist the development of Wordpress websites",
      ],
    },
    {
      position: "Web Developer",
      company: "Fifteen4",
      startDate: "September 2013",
      endDate: "August 2015",
      experience: [
        "Produced component libraries, style guides, wireframes and prototypes to support clients’ products or website development",
        "Collaborated with Fifteen4’s animation and video departments to create interactive micro sites and landing pages",
      ],
    },
  ],
  education: {
    degree: "BA, Communication",
    school: "University of Maryland, College Park",
  },
}
