import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import Uploader from '../components/Uploader'
import context from '../stores/index'
import { Tips, RedTips } from '../components/Styled'
const Component = observer(() => {
  const { UserStore } = useContext(context)
  return (
    <main>
      {UserStore.currentUser ? (
        <Tips>欢迎回来, {UserStore.currentUser.attributes.username}</Tips>
      ) : (
        <RedTips>请先登录再上传</RedTips>
      )}
      <Uploader />
    </main>
  )
})

export default Component
