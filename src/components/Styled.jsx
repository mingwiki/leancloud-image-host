import styled from 'styled-components'
import { List } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'antd'
const Tips = styled.div`
  padding: 1em 2em;
  font-size: 1.2rem;
  text-align: center;
`
const RedTips = styled.div`
  color: red;
  padding: 1em 2em;
  font-size: 1.2rem;
  text-align: center;
`
const AbsoluteTips = styled.div`
  position: absolute;
  font-size: 2em;
  top: 5em;
`
const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UploaderWrapper = styled.div`
  margin: 2em;
`
const UploadResultHeader = styled.div`
  font-size: 1.5em;
  margin: 2em;
  padding: 0 2em;
  text-align: center;
  border: 1px solid;
  border-radius: 10px;
`
const UploadResult = styled.div`
  border: 4px groove;
  border-top: none;
  border-radius: 1em;
  padding: 1em 3em;
`
const UploadResultLine = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`
const Copy = styled.button`
  border-style: solid;
  background: none;
  cursor: pointer;
  &.active {
    border-style: dashed;
  }
  &:active {
    color: red;
  }
`

const FooterWrapper = styled.footer`
  border-radius: 2rem 2rem 0 0;
  text-align: center;
  padding: 0.2rem 0;
  position: fixed;
  bottom: 0;
  left: 5vw;
  right: 5vw;
`
const FooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 2rem 2rem;
  position: fixed;
  top: 0;
  left: 5vw;
  right: 5vw;
  overflow: scroll;
  min-width: 400px;
`
const Logo = styled.img`
  width: 4em;
  height: 2em;
`
const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  margin-right: 1em;
  &.active {
    border-bottom: 0.1em solid;
  }
`
const StyledButton = styled(Button)`
  margin-left: 1em;
`
const MadList = styled(List)`
  flex: 1;
`
export {
  Tips,
  RedTips,
  AbsoluteTips,
  FlexWrapper,
  UploaderWrapper,
  UploadResultHeader,
  UploadResult,
  UploadResultLine,
  Copy,
  FooterWrapper,
  FooterLink,
  HeaderWrapper,
  Logo,
  HeaderNavLink,
  StyledButton,
  MadList,
}
