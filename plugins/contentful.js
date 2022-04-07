const contentful = require('contentful');

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_ACCESS_TOKEN
};

const createClient = () => {
  return contentful.createClient(config);
}

export default createClient;
