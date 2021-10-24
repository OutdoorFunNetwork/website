import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Outdoor Fun Network!">
      <h1>Welcome to Outdoor Fun Network!</h1>
      <p>Adventure cycling, backpacking, ultra running. No matter your definition of fun, we're here to help. We're a
        collective of outdoor lovers dedicated to encouraging others to get outside and explore.
      </p>
      <p>Check out our <Link to="/blog">blog</Link>, browse our <Link to="/routes">routes</Link>, and join the fun in our <a href="https://www.strava.com/clubs/outdoor-fun-network">Strava</a> group.</p>
      <StaticImage alt="" src="../images/high-five.jpg" />
    </Layout>
  )
}

export default IndexPage
