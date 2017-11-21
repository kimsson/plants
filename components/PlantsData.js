import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import ReactSpeedometer from 'react-d3-speedometer'
import RealtimeIO from './../utils/RealtimeIO'
import Config from './../config.js'

import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider';
import ActionGrade from 'material-ui/svg-icons/action/grade'
import {red500, yellow500, blue500} from 'material-ui/styles/colors'

class PlantsData extends Component {
  constructor (props) {
    super (props)
    this.state = {
      sensors: [],
      relays: [],
      autoControlls: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.getSensorData = this.getSensorData.bind(this)
    this.getRelaysData = this.getRelaysData.bind(this)
    this.updateSensorData = this.updateSensorData.bind(this)
    this.findArrayElementByTitle = this.findArrayElementByTitle.bind(this)
    this.formatString = this.formatString.bind(this)

    this.interval
  }

  componentWillMount () {
  }

  componentDidMount () {

    this.getRelaysData()
    this.getSensorData()
    this.updateSensorData()

  }
  componentWillUnMount() {
    clearInterval(this.interval)
  }

  getSensorData () {
    var sensors = [];
    RealtimeIO.load('sensors', (snapshot) => {
      snapshot.forEach(function(childSnapshot) {
          var item = childSnapshot

          sensors.push(item);
      });
      this.setState({sensors: sensors})

    })
  }
  getRelaysData () {
    var relays = [];
    RealtimeIO.load('relays', (snapshot) => {
      snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot;

        relays.push(item);
      });
      this.setState({relays: relays})
    })
  }

  autoControlls (val) {
    if(!this.state.autoControlls) return
    switch (val.key) {
      case 'plants_light_level':
        console.log(val.key, ' ', val.val())
          if(val.val() < Config.autoControlls.lightMinValue)
            RealtimeIO.set('relays/plants_light', 1)
          else
            RealtimeIO.set('relays/plants_light', 0)
        break;
      case 'humidity':
        console.log(val.key, ' ', val.val())
          if(val.val() < Config.autoControlls.humidityMinValue)
            RealtimeIO.set('relays/plants_humidity', 1)
          else
            RealtimeIO.set('relays/plants_humidity', 0)
        break;
      default:

    }
  }
  updateSensorData () {
    RealtimeIO.listen('child_changed', 'sensors', (snapshot) => {
      this.getSensorData()
      this.autoControlls(snapshot)

    })
    RealtimeIO.listen('child_changed', 'relays', (snapshot) => {

      this.getRelaysData()
    })
  }
  findArrayElementByTitle(array, key) {
    return array.find((element) => {
      return element.key === key;
    })
  }

  handleClick(val) {
    switch (val.key) {
      case 'plants_humidity':
        RealtimeIO.set('relays/' + val.key, val.val()+1)
        break;
      case 'auto_controlls':
        RealtimeIO.set('relays/' + val.key, (val.val()===1) ? 0 : 1)
        this.setState({autoControlls: (val.val()===1) ? 0 : 1})
        break;
      default:
      RealtimeIO.set('relays/' + val.key, (val.val()===1) ? 0 : 1)
      break;

    }
  }
  formatString (str) {
    return str.replace(/_/g, " ")
  }

  render () {

    const sensors = this.state.sensors.map(function(item, idx){
      return (<List key={idx}>
        <ListItem
          key={idx}
          primaryText={this,item.key.replace(/_/g, " ") + ' ' + item.val()}
          className="sensor"
          color={red500}
          disabled={false}>
          </ListItem>
      </List>)
    })
    const relays = this.state.relays.map(function(item, idx){
      return (<List key={idx}>
        <RaisedButton
        key={idx}
        primary={true}
        className="button"
        label={this,item.key.replace(/_/g, " ").toLowerCase() + ' '+ (item.val() ? "on" : "off")}
        onClick={this.handleClick.bind(this,item)} />
      </List>)
    }.bind(this))

    return (
      <div>
        <div>{sensors}</div>
        <Divider />
        <div>{relays}</div>
      </div>

    )
  }
}

export default PlantsData
