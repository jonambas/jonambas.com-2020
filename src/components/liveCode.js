import React from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import Box from "@sweatpants/box"
import github from "prism-react-renderer/themes/github"
import styled from "styled-components"
import prettier from "prettier/standalone"
import parserBabel from "prettier/parser-babel"

function Text(props) {
  return (
    <Box
      as="p"
      m="0"
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="center"
      p="400"
    >
      {props.children}
    </Box>
  )
}

const Wrapper = styled.div`
  &:focus-within {
    box-shadow: 0 0 0 1px blue;
  }
`

const Editor = styled(LiveEditor)`
  textarea:focus {
    outline: none;
  }
`

const Resize = styled(Box)`
  ${"" /* box-shadow: 10px 10px 10px black; */}
  border: 1px solid #EAEFF0;
  &:focus-within {
    box-shadow: 0 0 0 1px blue;
  }
`

const components = {
  Box,
  Text,
}

function LiveCode(props) {
  const { code = "", title } = props

  const formatted = prettier.format(code.trim(), {
    parser: "babel",
    plugins: [parserBabel],
    tabWidth: 2,
    jsxSingleQuote: false,
    printWidth: 50,
  })

  return (
    <Box mb="800" maxWidth="1200px">
      <Box as="h4" mb="300">
        {title}
      </Box>
      <LiveProvider code={formatted.trim()} scope={components} theme={github}>
        <Box display="flex">
          <Box flex="1" position="relative" height="auto">
            <Resize
              position="absolute"
              flex="1"
              bg="gray.100"
              p="500"
              height="100%"
              width="100%"
              overflow="hidden"
              style={{ resize: "both" }}
              zIndex="1"
            >
              <LivePreview
                Component={({ children }) => (
                  <div style={{ height: "100%" }}>{children}</div>
                )}
              />
            </Resize>
          </Box>

          <Box flex="1" pl="500">
            <Wrapper>
              <Box p="500" bg="gray.100" height="100%">
                <Editor />
              </Box>
              <LiveError />
            </Wrapper>
          </Box>
        </Box>
      </LiveProvider>
    </Box>
  )
}

export default LiveCode
