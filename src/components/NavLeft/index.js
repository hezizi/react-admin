import React, { Component } from 'react'

import { Menu } from 'antd'
import MenuConfig from '../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          { item.title }
        </Menu.Item>
      )
    })
  }

  render() {
    const { menuTreeNode } = this.state;
    console.log(menuTreeNode)
    return (
      <div>
        <div className='logo df-jcc df-aic'>
          <div className='ac'>
            <img src='./assets/logo-ant.svg' alt='logo' />
            <h1>React Admin</h1>
          </div>
        </div>
        <Menu theme='dark'>
          { menuTreeNode }
        </Menu>
      </div>
    );
  }
}

export default NavLeft