import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  disableCSSModules: true,
  base:"/blog/",
  outputPath:"../docs/blog",
  publicPath: "/blog/",
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/BasicLayout',
  //     routes: [
  //       {
  //         path: '/',
  //         name: 'home',
  //         component: './home/home',
  //       },
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'blog',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
