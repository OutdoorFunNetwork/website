import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../scss/style.scss';

const RoutesPage = ({ data }) => {
  const allRoutes = data.allMdx.nodes;
  const routes = allRoutes.filter(route => route.frontmatter.type === 'route');

  return (
    <Layout pageTitle="Route Library">
      <h2>Go on an adventure!</h2>
      {
        routes.map(node => (
          <article className="card" key={node.id}>
            <header>
              <h3>
                <Link to={`/routes/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h3>
            </header>
            <footer className="flex reverse">
              <span>{node.frontmatter.date}</span>
              <GatsbyImage
                image={getImage(node.frontmatter.avatar)}
                alt={node.frontmatter.author}
                className="avatar" />
            </footer>
          </article>
        ))
      }
    </Layout>
  );
};

export const query = graphql`
 query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        type
        author
        avatar {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt
      slug
    }
  }
}`;

export default RoutesPage;
