import React, { Component } from "react"
import { bindActionsCreators } from "../redux"
import { ReduxContext } from "./context"

export default (mapStateToProps, mapDispatchTProps) => {
  return (Com) => {
    return class Connect extends Component {
      static contextType = ReduxContext
      constructor(props, context) {
        super(props)
        this.state = mapStateToProps(context.getState())
      }
      componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => {
          this.setState(mapStateToProps(this.store.getState()))
        })
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      render() {
        this.store = this.context
        let bindAxtions =
          typeof mapDispatchTProps === "function"
            ? mapDispatchTProps(this.store.dispatch)
            : bindActionsCreators(mapDispatchTProps, this.store.dispatch)

        return <Com {...this.state} {...bindAxtions} />
      }
    }
  }
}
