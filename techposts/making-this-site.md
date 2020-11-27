---
pageTitle: Making this site
---
The structure of this site is like so:
```
index.html # is my homepage that lists out all 'posts'
-- recipes # where I am storing my recipes
-- techposts # where I am writing technical posts...
```

I've decided to use 11ty as my static site generator, serve the static content on S3, use Route53 as my DNS, and Google domains as my registrar.

The root of this site portfolio.fieldtripmike.com is where this static site will go for now...

### Using 11ty
After following these tutorials and examples, I've put together what you see before your own eyes...
- https://www.11ty.dev/docs/tutorials/
- https://www.filamentgroup.com/lab/build-a-blog/
- https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
- https://github.com/11ty/eleventy-base-blog
- https://github.com/drhayes/drhayes.io

### Hosting on AWS S3
Steps can be found [here](https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html). I'm really focused on:
1. Creating an empty bucket (step 2 in the docs above)
2. Configuring the bucket to serve static content (step 2 in the docs above)
3. Create a github action that syncs content from github to store the content that is stored in my 11ty `_site` directory
    - That is done [here](https://github.com/mikemartin1090/portfolio/blob/af75bff3980d3a3059d8c10a4feb02581f36cde1/.github/workflows/workflow.yml)