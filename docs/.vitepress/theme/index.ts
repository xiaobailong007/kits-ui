import DefaultTheme from 'vitepress/theme';

// 组件包与css引入
import '@useless/useless-ui-theme/index.scss';
import UseLessUI from '@useless/useless-ui';

import './style/var.css';
// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';

import { globals } from '../demo';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(UseLessUI);
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
};
