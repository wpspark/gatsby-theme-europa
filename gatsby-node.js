const axios = require('axios');
const createPosts = require(`./src/routing/createPosts`)
const createCategories = require(`./src/routing/createCategories`)
// const createPages = require(`./src/routing/createpages`)
const createUsers = require(`./src/routing/createusers`)
// const createTags = require(`./src/routing/createtags`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createCategories({ actions, graphql })
  // await createPages({ actions, graphql })
  await createUsers({ actions, graphql })
  // await createTags({ actions, graphql })
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const url = `${process.env.protocol}://${process.env.baseUrl}`;
  const result = await axios.get(`${url}/wp-json/spark/sitedata`);
  const data = result.data;

  const dataObject = {
    "favicon": data.favicon,
    "logo": data.logo
  };

  const nodeContent = JSON.stringify(dataObject)
  const nodeMeta = {
    id: createNodeId(`spark-site-info`),
    parent: null,
    children: [],
    internal: {
      type: `sparkData`,
      content: nodeContent,
      contentDigest: createContentDigest(dataObject)
    }
  }

  const node = Object.assign({}, dataObject, nodeMeta)
  actions.createNode(node)
}