import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/ExternalLink"
import data from '../components/resume';
import { Box, Text } from "@sparkpost/matchbox"

function Experience(props) {
  return (
    <Box as="ul">
      {props.experience.map(item => (
        <Box as="li" mb="400" lineHeight="200" fontSize="15px">
          {item}
        </Box>
      ))}
    </Box>
  )
}

const Resume = () => (
  <Layout>
    <SEO title="Resume" description="Jon's Resume" />

    <Box mb="800">
      <Text
        as="h1"
        mb="100"
        color="#000000"
        fontSize="600"
        letterSpacing="0.01em"
      >
        {data.meta.name}
      </Text>
      <Text mb="400" color="#000000" fontSize="100">
        <ExternalLink
          to="mailto:jon@jonambas.com?subject=Hello!"
          title="Email me"
        >
          {data.meta.email}
        </ExternalLink>
      </Text>
    </Box>
    <Box py="400">
      {data.jobs.map(job => {
        return (
          <Box mb="800">
            <Text as="h4" mb="100" fontSize="300">
              {job.positions
                ? `${job.positions[0].position}, `
                : `${job.position}, `}
              {job.company}
            </Text>
            {job.positions ? (
              job.positions.map(position => {
                return (
                  <Box my="600">
                    <Text fontSize="200" mb="100" fontWeight="500">
                      {position.position}
                    </Text>
                    <Text fontSize="100" mb="400">
                      <Text as="em">
                        {position.startDate} – {position.endDate}
                      </Text>
                    </Text>
                    <Experience experience={position.experience} />
                  </Box>
                )
              })
            ) : (
              <Box>
                <Box mb="500">
                  <Text as="em" fontSize="100">
                    {job.startDate} – {job.endDate}
                  </Text>
                </Box>
                <Experience experience={job.experience} />
              </Box>
            )}
          </Box>
        )
      })}
    </Box>
    <Box as="hr" border="none" bg="gray.300" height="1px" mb="800" mt="-1rem"/>
    <Box display="flex" flexWrap="wrap">
      {data.skills.map(skill => (
        <Box flex="1 0 33%" py="200">
          <Text fontSize="100">{skill}</Text>
        </Box>
      ))}
    </Box>
    <Text mt="800" fontSize="100">
      {data.education.degree}
    </Text>
    <Text fontSize="100" mb="600">
      {data.education.school}
    </Text>
  </Layout>
)

export default Resume
