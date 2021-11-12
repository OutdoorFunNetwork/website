import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';
import AuthorAvatar from '../../components/AuthorAvatar';

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <header>
        <h2>{data.mdx.frontmatter.title}</h2>
        <span>{data.mdx.frontmatter.date}</span>
        <div>
          <span>{data.mdx.frontmatter.author}</span>
          <AuthorAvatar 
            authorSrc={data.mdx.frontmatter.authorAvatar}
            authorAlt={data.mdx.frontmatter.author} />
        </div>
      </header>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
        authorAvatar
      }
      body
    }
  }
`;

export default BlogPost;
