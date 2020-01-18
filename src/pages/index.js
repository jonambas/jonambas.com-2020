import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/ExternalLink"
import { Box, Text } from '@sparkpost/matchbox'

const IndexPage = () => (
  <Layout>
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
      <Text color="#000000" fontSize="200" lineHeight="400">
        Currently a UX Engineer at{" "}
        <ExternalLink
          to="https://www.sparkpost.com"
          title="Open SparkPost website in a new tab"
        >
          SparkPost
        </ExternalLink>
        , building design systems.
      </Text>
      <Text color="#000000" fontSize="200" lineHeight="400">
        Formerly{" "}
        <ExternalLink
          to="https://www.fifteen4.com"
          title="Open FifteenFour website in a new tab"
        >
          Fifteen4
        </ExternalLink>
        .
      </Text>
    </Box>
  </Layout>
)

export default IndexPage
