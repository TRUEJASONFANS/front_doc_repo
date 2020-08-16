
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Card,
  Empty,
  Row,
  Col,
} from 'antd';
import HomeLeftSiderBar from '@/components/HomeLeftSiderBar';
import SiderList from '@/components/SiderList';
import HomeArticleList from '@/components/HomeArticleList';
import './home.less';
import { Interface } from 'readline';

// @connect(({ article, loading }) => ({
//   article, loading: loading.effects['article/articleList'],
// }))
interface HomeState {
  currentCategory: string[],
}
interface Props{

}
class Home extends PureComponent<Props, HomeState> {
  constructor(props:Props) {
    super(props);
    this.state = {
      currentCategory : [],
    }
  }
  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'article/articleList',
    // });
    // dispatch({
    //   type: 'article/hot',
    // });
    // dispatch({
    //   type: 'article/category',
    // });
  }

  render() {
    // const {
    //   article: { articleList, hotList, categorys, isEmptyList },
    //   loading,
    // } = this.props;
    let loading = false;
    let isEmptyList:object[] = [];
    let articleList:object[] = [];
    let hotList:object[] = [];
    return (
      <div style={{ padding: '1.5rem' }}>
        <Row type="flex" justify="center">
          <Col md={19} sm={20} xs={24}>
            <Row type="flex" justify="space-between">
              <Col lg={3} sm={7} xs={0}>
                <HomeLeftSiderBar
                  loading={loading}
                  categorys={this.state.currentCategory}
                />
              </Col>
              {/* <Col lg={16} sm={16} xs={24}>
                <Card
                  bordered={false}
                  loading={loading}
                >
                  {!isEmptyList ? (
                    <HomeArticleList
                      data={articleList}
                    />
                  ) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                </Card>
              </Col>
              <Col lg={4} sm={0} xs={0}>
                <Card
                  size="small"
                  bordered={false}
                  title="热门文章"
                  loading={loading}
                >
                  <SiderList
                    dataSource={hotList}
                    bordered={false}
                    size="small"
                    split={false}
                  />
                </Card>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
