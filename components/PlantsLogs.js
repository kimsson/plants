import React, { Component } from 'react';
import Config from '../config.js'
import RealtimeIO from './../utils/RealtimeIO'
import Moment from 'react-moment';

const LOG_INTERVAL = 60000

class PlantsLogs extends Component {
  constructor (props) {
    super (props)
    this.state = {
      sensors: [],
      logs: []
    }
    this.setLog = this.setLog.bind(this)
    this.getLog = this.getLog.bind(this)
    this.getSensorData = this.getSensorData.bind(this)
  }


  componentWillMount () {

  }
  componentDidMount () {
    // this.interval = setInterval(this.setLog, LOG_INTERVAL)
    this.getSensorData()
  }
  getSensorData () {
    var sensors = [];
    // RealtimeIO.load('sensors', function (snapshot) {
    RealtimeIO.load('sensors', (snapshot) => {
      snapshot.forEach(function(childSnapshot) {
          var item = childSnapshot

          sensors.push(item);
      });
      this.setState({sensors: sensors})
      this.setLog()

    })

  }
  setLog () {
    let d= new Date()
    d=d.toLocaleString()
    d=d.replace (/,/g, "")
    if(!this.state.sensors) return
    RealtimeIO.set('logs/' + new Date(), JSON.stringify(this.state.sensors))
    var logs = []
    RealtimeIO.load('logs', (snapshot) => {
      snapshot.forEach(function(childSnapshot) {
          var item = childSnapshot

          logs.push(item);
      });
      this.setState({logs: logs})
      this.getLog();
    })
  }
  getLog() {
    const logs = this.state.logs.map(function(item, idx){
      let log = {
        date: item.key,
        log: JSON.parse(item.val())
      }
      return (log)
    })
  }

  render () {

    return (
      <div>logs</div>
    )
  }
}
export default PlantsLogs
