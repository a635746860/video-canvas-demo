import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout', // ProLayout
      routes: [
        {
          path: '/',
          exact: true,
          component: 'Index',
          menu: {
            name: '首页',
            icon: '',
          },
          // redirect: '/home'
        },
        {
          path: '/queryPage',
          component: 'QueryPage',
          menu: {
            name: '查询页',
            icon: '',
          },
        },
      ],
    },
  ],
  fastRefresh: {},
});
