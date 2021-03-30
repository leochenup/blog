import React, { Component } from 'react'
import { ReduxContext } from './context'

export default class Provider extend Component{
  render(){
    return (
    	<ReduxContext.Provider value={this.props.store}>
      {this.props.children}
      </ReduxContext.Provider>
    )
  }
}
