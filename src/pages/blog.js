import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import '../scss/style.scss';

const BlogPage = ({ data }) => {
  const allPosts = data.allMdx.nodes;
  const blogPosts = [];

  for (const post of allPosts) {
    if (post.frontmatter.type === 'blog') {
      blogPosts.push(post);
    }
  }

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
        type
      }
      id
      slug
    }
  }
}`;
export default BlogPage;
