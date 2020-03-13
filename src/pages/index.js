import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"

export default () => (
  <div style={{ color: `purple` }}>
    <Navigation />
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/150x150" alt="" />
  </div>
)
