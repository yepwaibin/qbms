import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

import { HomeWrapper } from "./style";
import { Layout, Menu } from "antd";

import HeaderTitle from "@/components/header-title";

import { menuTitle } from "@/common/local-data";

const Home = memo((props) => {
  const { route } = props;
  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  return (
    <HomeWrapper>
      <Layout>
        <Header>
          <HeaderTitle />
        </Header>
        <Layout className="panel">
          <Sider collapsible className="sider" >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              {menuTitle.map((item) => {
                return (
                  <SubMenu key={item.title} icon={item.icon} title={item.title}>
                    {item.child.map((subitem) => {
                      if (!subitem.child) {
                        return (
                          <Menu.Item key={subitem.link}>
                            <NavLink to={subitem.link}>{subitem.title}</NavLink>
                          </Menu.Item>
                        );
                      } else {
                        return (
                          <SubMenu key={subitem.title} title={subitem.title}>
                            {subitem.child.map((sub) => {
                              return (
                                <Menu.Item key={sub.title}>
                                  <NavLink to={sub.link}>{sub.title}</NavLink>
                                </Menu.Item>
                              );
                            })}
                          </SubMenu>
                        );
                      }
                    })}
                  </SubMenu>
                );
              })}
            </Menu>
          </Sider>
          <Content className="content">{renderRoutes(route.routes)}</Content>
        </Layout>
      </Layout>
    </HomeWrapper>
  );
});

export default Home;
