import React, { Component } from 'react'
import ItemTracker from './items/ItemTracker'
import SramWatcher from './sram/SramWatcher'
import ConfigDisplay from './config/ConfigDisplay'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export default class MainDisplay extends Component {
  constructor(props) {
    super(props)

    const emptyBytes = []
    for(var i = 0; i < 256; i++)
    {
      emptyBytes[i] = 0
    }

    this.state = {data: emptyBytes}
  }

  updateItemDisplay(newData) {
    this.setState({data: newData})
  }

  render()
  {
    return(
      <Tabs>
        <TabList>
          <Tab>Configuration</Tab>
          <Tab>Item Tracker</Tab>
          <Tab>Time Tracking</Tab>
        </TabList>

        <TabPanel>
          <div className="window-background">
            <ConfigDisplay/>
            <SramWatcher updateItemDisplay={this.updateItemDisplay.bind(this)}/>
          </div>
        </TabPanel>
        <TabPanel>
          <ItemTracker data={this.state.data}/>
        </TabPanel>
        <TabPanel>
          <h2>Come back later</h2>
        </TabPanel>
      </Tabs>
    )
  }
}
