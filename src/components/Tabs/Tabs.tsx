import React, { useState } from 'react'
import { Tab, TabList, TabPanel } from './Tabs.style'

interface TabsProps {
  children: { props: { 'aria-label': string; children: [] } }[]
}

interface StringKeyObject {
  [key: string]: any
}

const createTabName = (index: number) => 'tab' + index

const createInitialState = (prop: number) => {
  const InitialState: StringKeyObject = {}
  for (let i = 0; i < prop; i++) {
    const name = createTabName(i)
    InitialState[name] = i === 0 ? true : false
  }
  return InitialState
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const propsChildrenLength = children.length
  const InitialState: StringKeyObject = createInitialState(propsChildrenLength)
  const [activeTab, setActiveTab] = useState(InitialState)

  const handleActiveTab = (tab: string, event: any = undefined) => {
    if (event && event.keyCode !== 13) {
      return false
    }
    let state = Object.keys(activeTab).reduce((result: StringKeyObject, key: string) => {
      result[key] = key === tab ? true : false
      return result
    }, {})
    setActiveTab(state)
  }

  return (
    <div>
      <TabList>
        {children.map((child, index) => {
          const name = createTabName(index)
          return (
            <Tab
              tabIndex="0"
              key={name}
              active={activeTab[name]}
              onClick={() => handleActiveTab(name)}
              onKeyUp={event => handleActiveTab(name, event)}
            >
              {child.props['aria-label']}
            </Tab>
          )
        })}
      </TabList>
      {children.map((child, index) => {
        const name = createTabName(index)
        return (
          <TabPanel key={name} active={activeTab[name]}>
            {child.props.children}
          </TabPanel>
        )
      })}
    </div>
  )
}

export default Tabs
