
import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import MainHeader from './Header';
const { Content, Footer } = Layout;

interface Props {
  children?: ReactNode
}

const indexPage = (props: Props) => (
  <React.Fragment>
    <Layout>
      <MainHeader />
      <Content>
        {props.children}
      </Content>
    </Layout>
  </React.Fragment>
);

export default indexPage;
