/*
 * @Author: 柒叶
 * @Date: 2019-09-11 10:07:52
 * @Last Modified by: 柒叶
 * @Last Modified time: 2019-09-26 06:43:05
 */
import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import Header from './Header';
const { Content } = Layout;

interface Props {
  children: ReactNode
}

const BasicLayout = (props: Props) => (
  <React.Fragment>
    <Layout>
      <Header />
      <Content>
        {props.children}
      </Content>
    </Layout>
  </React.Fragment>
);

export default BasicLayout;
