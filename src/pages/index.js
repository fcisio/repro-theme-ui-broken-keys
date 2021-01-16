/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react" // eslint-disable-line no-unused-vars
import { jsx, useThemeUI } from "theme-ui"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const PrintsThemeUIContext = () => {
  const ctx = useThemeUI()
  return <pre>{JSON.stringify(ctx, null, 2)}</pre>
}

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "&:hover": {
          bg: "lightblue",
        },

        // Working
        bg: "primary",
        height: "sidebar",
        fontFamily: "heading",
        fontWeight: "heading",
        lineHeight: "heading",
        letterSpacing: "caps",
        borderRadius: "medium",
        mt: 5,

        // Not working
        boxShadow: "default",
        border: "default",
        zIndex: "below",
      }}
    >
      Inspect Me
    </h1>
    <PrintsThemeUIContext />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
