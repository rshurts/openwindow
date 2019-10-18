# Open Window Theatre website built with [Gatsby](https://www.gatsbyjs.org/) & [Sanity.io](https://www.sanity.io)

Combines [Gatsby](https://www.gatsbyjs.org/) site generation with [Sanity](https://www.sanity.io) content management. Read [the blog post](https://www.sanity.io/blog/get-started-with-gatsby-and-structured-content), [see the getting started video](https://www.youtube.com/watch?v=qU4lFYp3KiQ), and read the [step-by-step blog post](https://www.sanity.io/blog/how-to-quickly-set-up-a-gatsby-js-jamstack-website-with-a-headless-cms). to learn more about this setup.

- [Installation](#installation)
- [Enable Gatsby watch mode for drafts](#enable-gatsby-watch-mode-for-drafts)
- [Running in development](#running-in-development)
- [Deployment](#deployment)
- [License](#license)

## Installation

```sh
git clone git@github.com:rshurts/openwindow.git
cd openwindow
yarn

# Install or upgrade the Sanity CLI to
# make sure you are on v0.140.0 or higher
npm install -g @sanity/cli
# Set up Sanity,io account and project (≈ 45s)
yarn init
```

## Enable Gatsby watch mode for drafts

Watch mode in the `gatsby-source-sanity` plugin is enabled, which means that your frontend will automatically update with content changes whenever you publish them. If you want the frontend to show content changes in real time, you must do the following:

- Go to [manage.sanity.io](https://manage.sanity.io) and find your project (or run the command `sanity manage` in the studio folder)
- Navigate to Settings->API and scroll down to the **Tokens** section
- Add a new token and give it **read** privileges.
- Create a file called `.env` in the `/gatsby` folder
- Add your new token to the key: `SANITY_TOKEN="<token here>"`

If you restart the local development server, it will now show unpublished changes from the Studio. Note that the `.env` file is ignored by Git, because the token gives access to unpublished content in the API.

## Running in development

```sh
yarn start
# Studio at http://localhost:3000
# Web frontend at http://localhost:8000
# GraphiQL explorer at http://localhost:8000/___graphql
```

## Deployment

```sh
# Deploy a GraphQL API and schema to Sanity
yarn graphql-deploy

# Deploy the Sanity Studio to *.sanity.studio
yarn sanity-deploy
```

### Deploy on Netlify

If you want to deploy the Gatsby site to Netlify a netlify.toml config is added. After adding your repo to Netlify you’ll get automatic builds & deploys when pushing to master. You can also add a webhook to get deploys on content changes.

### Netlify webhook

In Netlify go to **Settings > Build & Deploy > Build Hooks**. Add a new hook, with a name and the git branch to use. Then add a sanity webhook.

```sh
cd project/studio
sanity hook create
? Hook name: netlify
? Select dataset hook should apply to: <yourDataset>
? Hook URL: https://api.netlify.com/build_hooks/<netlifyHookId>
```

## License

MIT
