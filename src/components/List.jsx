import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import context from '../stores/index'
import { List, Avatar } from 'antd'
import logo2 from '../logo2.svg'
import { MadList } from './Styled'

const Component = observer(() => {
  const { HistoryStore, UserStore } = useContext(context)
  // const IconText = ({ icon, text }) => (
  //   <Space>
  //     {React.createElement(icon)}
  //     {text}
  //   </Space>
  // );
  return (
    <>
      {HistoryStore.list.length === 0 &&
      UserStore.currentUser &&
      !HistoryStore.isUploading
        ? HistoryStore.query({ page: 0, limit: 6 })
        : null}
      <MadList
        itemLayout="vertical"
        size="default"
        pagination={{
          onChange: (page) => {
            if (page === HistoryStore.maxPage) {
              HistoryStore.query({ page: page, limit: 3 })
              HistoryStore.setMaxPage()
            }
          },
          pageSize: 3,
        }}
        loading={HistoryStore.isUploading}
        dataSource={HistoryStore.list}
        // footer={
        //   <div>
        //     <b>imgurl</b>
        //     <i> {new Date().toLocaleString("zh-CN")} </i>
        //     {UserStore.currentUser ? (
        //       <b>{UserStore.currentUser.attributes.username}</b>
        //     ) : null}
        //   </div>
        // }
        renderItem={(item) => (
          <List.Item
            key={item.id}
            // actions={[
            //   <IconText
            //     icon={StarOutlined}
            //     text="156"
            //     key="list-vertical-star-o"
            //   />,
            //   <IconText
            //     icon={LikeOutlined}
            //     text="156"
            //     key="list-vertical-like-o"
            //   />,
            //   <IconText
            //     icon={MessageOutlined}
            //     text="2"
            //     key="list-vertical-message"
            //   />,
            // ]}
            extra={
              <img
                width={272}
                height={180}
                objectFit="contain"
                alt="Preview"
                src={item.attributes.url}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={logo2} />}
              title={<a href={item.attributes.url}>{item.attributes.name}</a>}
              description={item.attributes.url}
            />
            上传日期：{item.createdAt.toLocaleString('zh-CN')}
          </List.Item>
        )}
      />
    </>
  )
})

export default Component
