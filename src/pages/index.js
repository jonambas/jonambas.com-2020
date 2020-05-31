import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/ExternalLink"
import Box from "@sweatpants/box"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout centered>
    <SEO title="Jon Ambas" />

    <Box>
      <Box
        as="h1"
        mb="400"
        color="#000000"
        fontSize="600"
        letterSpacing="0.01em"
      >
        Jon Ambas
      </Box>
      <Box
        as="p"
        color="#000000"
        fontSize="100"
        fontWeight="500"
        lineHeight="1.5em"
      >
        Currently a Lead UX Engineer at{" "}
        <ExternalLink
          to="https://www.sparkpost.com"
          title="Open SparkPost website in a new tab"
        >
          SparkPost
        </ExternalLink>
        , building design systems.
      </Box>
      <Box as="p" fontSize="100" fontWeight="500" lineHeight="1.5em">
        <Link to="/resume" title="View Resume">
          View Resume
        </Link>
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
