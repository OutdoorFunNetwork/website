import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import '../scss/style.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPage = ({ data }) => {
  const allPosts = data.allMdx.nodes;
  const blogPosts = allPosts.filter(post => post.frontmatter.type === 'blog');

  return (
    <Layout pageTitle="OFN Blog">
      <h2>Blog Posts</h2>
      {
        blogPosts.map(node => (
          <article className="card" key={node.id}>
            <h3>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <p>{node.frontmatter.blurb}</p>
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
      frontmatter {
        title
        avatar {
          childImageSharp {
            gatsbyImageData
          }
        }
        author
        date(formatString: "MM/D/YYYY")
        tags
        blurb
        type
      }
      id
      slug
    }
  }
}`;
export default BlogPage;
