/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Theme from "@sweatpants/theme"
import Box from "@sweatpants/box"
import ExternalLink from "./ExternalLink"
import { createGlobalStyle } from "styled-components"
import { global } from "./global"

const GlobalStyle = createGlobalStyle`
  ${global}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Theme
        theme={{
          space: {
            1000: "6rem",
            900: "5rem",
            800: "4rem",
            750: "3.5rem",
            700: "3rem",
            650: "2.5rem",
            600: "2rem",
            550: "1.75rem",
            500: "1.5rem",
            450: "1.25rem",
            400: "1rem",
            300: "0.75rem",
            200: "0.5rem",
            100: "0.25rem",
            0: "0rem",
          },
          fontSizes: {
            800: "3.5rem",
            700: "2.75rem",
            600: "2rem",
            500: "1.5rem",
            400: "1.25rem",
            300: "1.125rem",
            200: "1rem",
            100: "0.875rem",
          },
          colors: {
            gray: {
              200: "#ebf0f5",
              100: "#F6F8FA",
              0: "#000",
            },
            blue: {
              300: "#cce3ff",
              200: "#e8f3ff",
              100: "#f2f8ff",
            },
            green: {
              300: "#b5f5e0",
              200: "#d6fff1",
              100: "#e8fff7",
            },
            purple: {
              300: "#e5d4ff",
              200: "#f9f5ff",
              100: "#f9f5ff",
            },
          },
          breakpoints: ["960px", "1400px"],
        }}
      >
        <Box position="relative" minHeight="100vh">
          <main>
            <Box mx="600" pt="800" pb="800">
              {children}
            </Box>
            <Box>
              <Box
                as="footer"
                display="flex"
                flexWrap="wrap"
                my="500"
                ml="600"
                position="absolute"
                bottom="0"
              >
                <Box mr="700" mb="300" fontSize="100" fontWeight="500">
                  <ExternalLink to="https://github.com/jonambas">
                    Github
                  </ExternalLink>
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
            </Box>
          </main>
        </Box>
      </Theme>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
