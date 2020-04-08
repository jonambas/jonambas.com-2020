import React from "react"

function ExternalLink(props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.to}
      title={props.title || "Opens in a new tab"}
    >
      {props.children}
    </a>
  )
}

export default ExternalLink
