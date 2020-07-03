import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'
import Counter from '../components/counter'

function CounterContainer(props) {
    return (
        <Counter {...props} />
    )
}

const mapStateToProps = ({ count: { counter } }) => {
    return {
        counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)