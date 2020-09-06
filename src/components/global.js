export const global = `
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  html {
    font-size: 20px;
    line-height: 32px;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    min-height: 100%;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  body {
    color: hsla(0, 0%, 0%, 1);
    font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif;
  }
  a,
  a:visited {
    color: #2c44f1;
    transition: 0.15s;
  }
  a:hover,
  a:visited:hover {
    color: #f12c2c;
  }
  ::selection {
    background: #f12c2c;
    color: #fefefe;
  }
  p {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li {
    margin: 0;
  }
  ul {
    padding-left: 0;
    list-style-type: none;
  }
  li {
    position: relative;
    padding-left: 1.25rem;
  }

  li:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 9px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: black;
  }

  article p, article li {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.003em;
  }

  article li:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 14px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: black;
  }

`
