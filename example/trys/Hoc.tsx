/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react'

class IndexComponent extends Component<any, any> {

  constructor(props) {super(props);}

  say() {
    console.log('warp')
  }

  render() {
    return {}
  }

}


function Hoc(WarpComponent) {
  return class Advance extends Component<any, {name: string}> {
    state = {
      name: 'hoc'
    }

    constructor(props) {
      super(props);
    }

    say() {
      console.info(this.state.name)
    }

    render = () => <WarpComponent {...this.props} {...this.state} />
  }
}
