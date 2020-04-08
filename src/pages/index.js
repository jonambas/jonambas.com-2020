import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/ExternalLink"
import { Box, Text } from "@sparkpost/matchbox"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout centered>
    <SEO title="Jon Ambas" />

    <Box>
      <Text
        as="h1"
        mb="400"
        color="#000000"
        fontSize="600"
        letterSpacing="0.01em"
      >
        Jon Ambas
      </Text>
      <Text color="#000000" fontSize="100" fontWeight="500" lineHeight="400">
        Currently a UX Engineer at{" "}
        <ExternalLink
          to="https://www.sparkpost.com"
          title="Open SparkPost website in a new tab"
        >
          SparkPost
        </ExternalLink>
        , building design systems.
      </Text>
    </Box>
  </Layout>
)

export default IndexPage
