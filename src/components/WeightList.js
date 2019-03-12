import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WeightItem from './WeightItem';

export default class WeightList extends Component {

  renderRecords() {
    const { records } = this.props;
    return records.map( record => {
      return (
        <WeightItem
          key={record.id}
          id={record.id}
          weight={record.weight}
          date={record.date}
        />
      )
    })
  }

  render(){
    return(
      <View>
        { this.renderRecords() }
      </View>
    )
  }

}
