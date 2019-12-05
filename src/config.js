const dev = {
  STRIPE_KEY: "pk_test_5JMZdmWZQxwe7vtNOPU9ZZpj00Wh3XgDKH",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-1um48ck2lrjez"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://qmlrvgtnj7.execute-api.ap-southeast-2.amazonaws.com/dev/"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_P3GZ9ehIw",
    APP_CLIENT_ID: "1m55l569bq1l9o4jcs8g6vc1nb",
    IDENTITY_POOL_ID: "ap-southeast-2:30b9f943-d7dd-406d-b44a-df4a83679451"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_5JMZdmWZQxwe7vtNOPU9ZZpj00Wh3XgDKH",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-1u0td8u2or7y4"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://8vya9ehfwb.execute-api.ap-southeast-2.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_HL2IW4OH4",
    APP_CLIENT_ID: "4r56p1c6a23agjvn0ehtrtad34",
    IDENTITY_POOL_ID: "ap-southeast-2:597e1cc8-ec95-429b-91d3-55c693dde97e"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};