import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../store/count/action'
import { startAuth } from '../store/auth/action'

const AddCount = ({ count, addCount, token}) => {
  console.log(addCount)
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        AddCount: <span>{token}</span>
      </h1>
      <button onClick={addCount}>Add To Count</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count.count,
  token: !!state.authenticate.token,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startAuth: bindActionCreators(startAuth, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
