import Rollbar from 'rollbar';

// Track error by rollbar.com
if (location.host === 'preview.pro.ant.design') {
  console.log(location.host, '这是location');
  Rollbar.init({
    accessToken: '033ca6d7c0eb4cc1831cf470c2649971',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'production',
    },
  });
}
