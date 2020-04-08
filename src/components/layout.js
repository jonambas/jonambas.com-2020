/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, Box } from "@sparkpost/matchbox"
import ExternalLink from "./ExternalLink"
import styled from "styled-components"
import "./layout.css"

const StyledContent = styled("div")`
  opacity: 1 !important;
`

const Layout = ({ centered, children }) => {
  return (
    <ThemeProvider>
      <StyledContent className="content">
        <main>
          <Box
            mx="600"
            display={centered ? "flex" : ""}
            height={centered ? "80vh" : ""}
            alignItems={centered ? "center" : ""}
            maxWidth={centered ? "" : "600px"}
            py={centered ? "0" : "600"}
          >
            {children}
          </Box>
        </main>
        <Box
          as="footer"
          position={centered ? "absolute" : ""}
          bottom={centered ? "0" : ""}
          display="flex"
          flexWrap="wrap"
          my="500"
          ml="600"
        >
          <Box mr="700" mb="300" fontSize="100" fontWeight="500">
            <ExternalLink to="https://github.com/jonambas">Github</ExternalLink>
          </Box>

          <Box mr="700" mb="300" fontSize="100" fontWeight="500">
            <ExternalLink to="https://dribbble.com/jonambas">
              Dribbble
            </ExternalLink>
          </Box>

          <Box mr="700" mb="300" fontSize="100" fontWeight="500">
            <ExternalLink to="https://twitter.com/jonambas">
              @jonambas
            </ExternalLink>
          </Box>

          <Box mr="700" mb="300" fontSize="100" fontWeight="500">
            <ExternalLink
              to="mailto:jon@jonambas.com?subject=Hello!"
              title="Email me"
            >
              jon@jonambas.com
            </ExternalLink>
          </Box>
        </Box>
      </StyledContent>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
