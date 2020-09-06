import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/ExternalLink"
import Box from "@sweatpants/box"
import { graphql, Link, useStaticQuery } from "gatsby"

function usePosts() {
  const data = useStaticQuery(graphql`
    query UpdatesQuery {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          excerpt(pruneLength: 150)
          id
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  return data.allMdx.nodes
}

function Posts() {
  const posts = usePosts()

  if (posts.length === 0) {
    return null
  }
  return (
    <Box maxWidth="650px" mt="400" mx="auto">
      <Box as="h3" mb="450">
        Posts
      </Box>
      {posts.map((post) => (
        <Box
          key={post.id}
          color="#000000"
          fontWeight="500"
          lineHeight="1.5em"
          mb="500"
        >
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
            <Box as="span" fontSize="1.1em">
              {" "}
              →
            </Box>
          </Link>
          <Box
            as="time"
            display="block"
            fontStyle="italic"
            fontSize="100"
            lineHeight="1em"
          >
            {post.frontmatter.date}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Jon Ambas" />
      <Box maxWidth="650px" margin="0 auto">
        <Box
          as="h1"
          pt="1000"
          mb="400"
          mt="0"
          color="#000000"
          letterSpacing="0.01em"
        >
          Jon Ambas
        </Box>
        <Box as="p" color="#000000" fontWeight="500" lineHeight="1.5em">
          Currently a Lead UX Engineer at{" "}
          <ExternalLink
            to="https://www.sparkpost.com"
            title="Open SparkPost website in a new tab"
          >
            SparkPost
          </ExternalLink>
          , building design systems.
        </Box>
        <Box as="p" fontWeight="500" lineHeight="1.5em" mb="1000">
          <Link to="/resume" title="View Resume">
            View Resume
          </Link>
        </Box>
      </Box>
      <Box mb="1000">
        <Posts />
      </Box>
    </Layout>
  )
}

export default IndexPage
