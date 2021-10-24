import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import '../scss/style.scss';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="OFN Blog">
      <h2>Blog Posts</h2>
      {
        data.allMdx.nodes.map(node => (
          <article className="card" key={node.id}>
            <h3>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <p>{node.frontmatter.blurb}</p>
            <footer className="flex reverse">
              <span>{node.frontmatter.date}</span>
              <span>{node.frontmatter.author}</span>
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
      frontmatter {
        title
        authorAvatar
        author
        date(formatString: "MM/D/YYYY")
        tags
        blurb
      }
      id
      slug
    }
  }
}`;
export default BlogPage;
