import React from "react"
import Helmet from "react-helmet"
import Layout from "./layout"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Box from "@sweatpants/box"
import LiveCode from "./liveCode"
import ExternalLink from "./ExternalLink"

function BlogPostLayout({ pageContext }) {
  const { title, date, body } = pageContext

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box mb="800">
        <Link to="/">← Back</Link>
      </Box>
      <article>
        <Box as="header" mb="800">
          <Box as="h1" mb="0">
            {title}
          </Box>
          <Box as="time" fontStyle="italic" fontSize="100" lineHeight="1em">
            {date}
          </Box>
        </Box>
        <MDXProvider components={{ LiveCode, Box, ExternalLink }}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  )
}

export default BlogPostLayout
