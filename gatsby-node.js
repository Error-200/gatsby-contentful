const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
   // A path template
  const blogTemplate = path.resolve('./src/templates/blog.js')
  //A markdown data
  const res = await graphql(`
    query  {
     allContentfulBlogPost {
       edges {
         node {
           slug
         }
       }
     }
   }

  `)

  // Create blog post pages.
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      // Path for this page — required
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
         slug: edge.node.slug
      }
    })
  })
}
