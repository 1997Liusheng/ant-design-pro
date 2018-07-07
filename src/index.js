import './polyfill'; //Polyfill是一个js库，主要抚平不同浏览器之间对js实现的差异
import dva from 'dva'; // 引入dva框架
import createHistory from 'history/createHashHistory'; //http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html
// user BrowserHistory
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading'; // https://github.com/dvajs/dva/tree/master/packages/dva-loading
import 'moment/locale/zh-cn'; //中文语言（汉化） 456456456456
import './rollbar';

import './index.less';
// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
app.use(createLoading());

// 3. Register global model
app.model(require('./models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store; // eslint-disable-line
