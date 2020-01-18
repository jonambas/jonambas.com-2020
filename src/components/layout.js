/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, Box } from "@sparkpost/matchbox"
import "./layout.css"
import ExternalLink from './ExternalLink';

const Layout = ({ children }) => {

  return (
    <ThemeProvider>
      <Box>
        <main>
          <Box
            mx="600"
            display="flex"
            height="80vh"
            alignItems="center"
          >
            {children}
          </Box>
        </main>
        <Box
          as="footer"
          position="absolute"
          bottom="0"
          display="flex"
          flexWrap="wrap"
          my="500"
          ml="600"
        >
          <Box mr="700" mb="300">
            <ExternalLink to="https://github.com/jonambas">Github</ExternalLink>
          </Box>

          <Box mr="700" mb="300">
            <ExternalLink to="https://dribbble.com/jonambas">
              Dribbble
            </ExternalLink>
          </Box>

          <Box mr="700" mb="300">
            <ExternalLink to="https://twitter.com/jonambas">
              @jonambas
            </ExternalLink>
          </Box>

          <Box mr="700" mb="300">
            <ExternalLink to="mailto:jon@jonambas.com?subject=Hello!" title="Email me">
              jon@jonambas.com
            </ExternalLink>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
