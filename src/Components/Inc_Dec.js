import React, { Component } from 'react'
import { Increment,Decrement } from '../Actions/index'
import { connect } from 'react-redux'
const mapStateToProps=(props)=>{
    return{
        inc_dec:props.Inc_Dec_Reducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>dispatch(Increment()),
        decrement:()=>dispatch(Decrement())
    }
}
export class Incdec extends Component {
  render() {
    return (
      <div className='main-div'>
          <h1>INCREMENT / DECREMENT</h1>
          <h3>Value : <span>{this.props.inc_dec}</span></h3>
          <div className='btn-div'>
          <button onClick={()=>this.props.increment()}>ADD</button>
          <button onClick={()=>this.props.decrement()}>SUB</button>
          </div>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Incdec)
