import React from 'react';
import { Layout, Icon, Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom'
import styles from './index.less';
const defaultProps = { type: 'primary', size: 'small', style: { marginRight: 10} }
const { Header } = Layout;

export default ({ status, handleSave, setStatus }) => (
  <div className={styles.indexHeadWrap}>
    <Header className={styles.head}>
      <div className={styles.left}>
        <div className={styles.logo} key="logo" id="logo">
          <Link to="/">
            <Icon type="qrcode" />
            <h1 className={styles.headName}>My Dashboard</h1>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        {status === 'edit' ?
          <Button {...defaultProps} onClick={() => setStatus('preview')}>预览</Button> :
          <Button {...defaultProps} onClick={() => setStatus('edit')}>返回</Button>
        }
        <Tooltip title="保存成功后将跳至首页">
          <Button {...defaultProps} onClick={handleSave}>保存</Button>
        </Tooltip>
      </div>
    </Header>
  </div>
)