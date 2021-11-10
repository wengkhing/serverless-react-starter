const appName = 'react-serverless';
const region = 'ap-southeast-1';

const bucketName = `${appName}-assets`;
const environment = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const deployedDomain = `https://${bucketName}-${environment}.s3.${region}.amazonaws.com`;
const staticDomain =
  process.env.IS_OFFLINE === 'true'
    ? 'http://localhost:8080'
    : deployedDomain;

exports.appName = appName;
exports.region = region;
exports.bucketName = bucketName;
exports.staticDomain = staticDomain
