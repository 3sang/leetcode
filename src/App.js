/*
 * Description  : 首页.分为list(链表)、array(数组)、tree(树)、stack(栈)、queue(队列)
 * Author       : Saraku.
 * Date         : 2021-05-21 20:16:44
 * LastEditors  : Saraku.
 * LastEditTime : 2021-05-23 10:35:49
 */

import React,{useState} from "react";
import styles from "./app.less";
import { Layout, Menu } from "antd";
import MarkdownIt from "markdown-it";
import MenuType from './utils'
import Index from "./index.md";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function App() {
  const [currentMd,setCurrentMd] = useState(Index)
  const MarkdownContent = new MarkdownIt(/* Markdown-it options */);

  const onMenuClick = ({ key }) => {
    setCurrentMd(MenuType(key));
  };

  return (
    <div className={styles.default}>
      <Layout className={styles.layout}>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["default"]}
            style={{ height: "100%", borderRight: 0 }}
            onClick={onMenuClick}
          >
            <Menu.Item key="default">首页说明</Menu.Item>
            <SubMenu key="list" title="链表">
              <Menu.Item key="list-0">首页</Menu.Item>
            </SubMenu>
            <SubMenu key="array" title="数组">
              <Menu.Item key="array-0">首页</Menu.Item>
              <Menu.Item key="array-1">只出现过一次的数</Menu.Item>
            </SubMenu>
            <SubMenu key="tree" title="树">
              <Menu.Item key="tree-0">首页</Menu.Item>
            </SubMenu>
            <SubMenu key="stack" title="栈">
              <Menu.Item key="stack-0">首页</Menu.Item>
            </SubMenu>
            <SubMenu key="queue" title="队列">
              <Menu.Item key="queue-0">首页</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div
            className={styles.mdPage}
              dangerouslySetInnerHTML={{
                __html: MarkdownContent.render(currentMd),
              }}
            ></div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;