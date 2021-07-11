# taranitup.com
A personal project for Taran Pierce to test out new things.

## Requirments
- nextjs

## Install
- run `npm i`
- for dev mode: `npm run dev`
- create static build: `npm run export`

### Features
- Nextjs - Static Site Generation
- AWS
  - CodeBuild - merges to master build application
  - S3 - artifact from CodeBuild is moved to S3 bucket
  - Route 53 - routing DNS to S3 bucket
- Google Tag Manager - analytics

### Todo
- Setup unit tests with Cypres or Jest
- Hook up to Cloudinary for CDN
- Hook up headless CMS
- Set up CloudFront
- Set up https after setting up CloudFront
- Set up caching
