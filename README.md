# Gossamer

## Overview

```
.
|-- _output                   # Output folder for development build(where the local server serves from)
|-- .github
|   └── workflows
|       └── publish.yml       # Deployment Github-Action Configuration
|-- assets
|   |-- css
|   |-- fonts
|   |-- images
|   |-- js
|   └── vendor
|-- dist                      # Output folder for production build(where the prod server servers from)
|-- src
|   |-- _data
|   |   |-- projects.json     # Project data
|   |   └── seo.json          # SEO Configuration
|   |-- index.njk             # Home page template
|   └── project.njk           # Project page template
|-- .eleventy.js              # Eleventy Configuration
|-- .stylelintrc              # Stylelint Configuration
└── snowpack.config.js        # Snowpack Configuration
```

## Running locally

### Prerequisites

- Node v10+

### Install dependencies

In the root directory, run:

```
npm install
```

### Run development server

```
npm start
```

## Adding Projects to the Portfolio

The project list on the home page and each individual project page are auto generated from the `src/_data/projects.json` file. The file's content is an array of json objects each representing a single project.

Each project object should follow this format:

```
{
  "projectName": "Sample Project",                  # Project name
  "coverImage": "/images/work-thumb-1.jpg",         # Source of cover image displayed on the project list in the home page
  "description": "Sample Description",              # Project description
  "summary": "Sample Description",                  # Project summary
  "catalogueImages": [                              # Array of images displayed in the carousel on the project's page
    {
      "src": "/images/slide-1.jpg",                 # Image source
      "caption": "Sample caption 1",                # Caption for carousel
      "alt": "Sample"                               # Image alternate text
    },
    {
      "src": "/images/slide-2.jpg",
      "caption": "Sample caption 2",
      "alt": "Sample"
    },
    {
      "src": "/images/slide-3.jpg",
      "caption": "Sample caption 3",
      "alt": "Sample"
    }
  ]
}
```

Note:

- Images in the `/assets/images` folder are accessible using the `/images` path. For example, if an image `a.jpg` is stored in the `/assets/images`, instead of using `/assets/images/a.jpg`, simply use `/images/a.jpg`. (Why? This is because the content of the assets folder are copied into the output folder during build)

## SEO Configuration

SEO tags are auto generated from the seo configuration file located at `src/_data/seo.json`.

## Creating a production build

In the root directory run:

```
npm run build
```

This will build the website and output the resulting files in the `dist` directory.
