import React from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Tag } from 'antd';
import { IRouteComponentProps, Link } from 'umi';

const BasicLayout = ({ children, ...otherProps }: IRouteComponentProps) => {
  return (
    <ProLayout
      style={{ height: '100vh' }}
      navTheme="light"
      fixSiderbar
      route={otherProps.routes}
      headerRender={false}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      {...otherProps}
    >
      <PageContainer
        tags={<Tag color="blue">状态一</Tag>}
        header={{
          style: {
            padding: '4px 16px',
            position: 'fixed',
            top: 0,
            width: '100%',
            left: 0,
            zIndex: 999,
            boxShadow: '0 2px 8px #f0f1f2',
          },
        }}
        style={{
          paddingTop: 48,
        }}
      >
        <div
          style={{
            height: 'calc(100vh - 48px - 24px)',
          }}
        >
          {children}
        </div>
      </PageContainer>
    </ProLayout>
  );
};

export default BasicLayout;
