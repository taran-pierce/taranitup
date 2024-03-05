# taranitup.com
A personal project for Taran Pierce to test out new things.

## Requirments
- nodejs
- nextjs

## Install
- run `npm i`
- for dev mode: `npm run dev`
- create static build: `npm run build`

### Features
- Nextjs - Static Site Generation
- AWS
  - CodeBuild - merges to master build application
  - S3 - artifact from CodeBuild is moved to S3 bucket
  - Route 53 - routing DNS to S3 bucket
  - Cloud Front - SSL and caching
- Google Tag Manager - analytics
- Cloudinary - Content Delivery Network

### Todo
- Setup unit tests with Cypres or Jest
- Hook up headless CMS
