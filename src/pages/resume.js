import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/ExternalLink"
import data from "../components/resume"
import Box from "@sweatpants/box"

function Experience(props) {
  return (
    <Box as="ul">
      {props.experience.map((item) => (
        <Box as="li" mb="400" fontWeight="500">
          {item}
        </Box>
      ))}
    </Box>
  )
}

const Resume = () => (
  <Layout>
    <Box maxWidth="680px" m="0 auto" lineHeight="1.5em">
      <SEO title="Resume" description="Jon's Resume" />
      <Box mb="800">
        <Box as="h1" mb="100" color="#000000" letterSpacing="0.01em">
          {data.meta.name}
        </Box>
        <Box as="p" mb="400" color="#000000" fontWeight="500">
          <ExternalLink
            to="mailto:jon@jonambas.com?subject=Hello!"
            title="Email me"
          >
            {data.meta.email}
          </ExternalLink>
        </Box>
      </Box>
      <Box py="400">
        {data.jobs.map((job) => {
          return (
            <Box mb="800">
              <Box as="h4" mb="100">
                {job.positions
                  ? `${job.positions[0].position}, `
                  : `${job.position}, `}
                {job.company}
              </Box>
              {job.positions ? (
                job.positions.map((position) => {
                  return (
                    <Box my="600">
                      <Box mb="100" fontWeight="600">
                        {position.position}
                      </Box>
                      <Box mb="500" fontWeight="500">
                        <Box as="em">
                          {position.startDate} – {position.endDate}
                        </Box>
                      </Box>
                      <Experience experience={position.experience} />
                    </Box>
                  )
                })
              ) : (
                <Box>
                  <Box mb="500">
                    <Box as="em" fontWeight="500">
                      {job.startDate} – {job.endDate}
                    </Box>
                  </Box>
                  <Experience experience={job.experience} />
                </Box>
              )}
            </Box>
          )
        })}
      </Box>
      <Box
        as="hr"
        border="none"
        bg="gray.300"
        height="1px"
        mb="800"
        mt="-1rem"
      />
      <Box display="flex" flexWrap="wrap">
        {data.skills.map((skill) => (
          <Box flex="1 0 33%" py="200">
            <Box fontWeight="500">{skill}</Box>
          </Box>
        ))}
      </Box>
      <Box mt="800" fontWeight="500">
        {data.education.degree}
      </Box>
      <Box mb="600" fontWeight="500">
        {data.education.school}
      </Box>
    </Box>
  </Layout>
)

export default Resume
