# taranitup.com
A personal project for Taran Pierce to test out new things.

## Requirments
- Node.js (Node v18)
- Next.js

## Install
- run `npm i`
- for dev mode: `npm run dev`
- create static build: `npm run build`

### Features
- Next.js - Static Site Generation
- AWS
  - CodeBuild - merges to master build application
  - S3 - artifact from CodeBuild is moved to S3 bucket
  - Route 53 - routing DNS to S3 bucket
  - CloudFront - SSL and caching
- Google Analytics - analytics
- Cloudinary - Content Delivery Network
