import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import '../scss/style.scss';

const RoutesPage = ({ data }) => {
  const allRoutes = data.allMdx.nodes;
  const routes = [];

  for (const route of allRoutes) {
    if (route.frontmatter.type === 'route') {
      routes.push(route);
    }
  }
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
              <span>{node.frontmatter.date}</span>
            </header>
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
      }
      excerpt
      slug
    }
  }
}`;

export default RoutesPage;
