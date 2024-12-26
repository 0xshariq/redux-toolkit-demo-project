import React, { useState } from 'react'
import type { RootState } from './store.tsx'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByValue, decrementByValue } from './counterSlice.tsx'
import "../App.css"

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)
  
    return (
      <div className="counter-container">
        <div className="counter-value">{count}</div>
        <div className="counter-buttons">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <div className="counter-input-group">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
          />
          <button onClick={() => dispatch(incrementByValue(amount))}>
            Increment by Amount
          </button>
          <button onClick={() => dispatch(decrementByValue(amount))}>
            Decrement by Amount
          </button>
        </div>
      </div>
    )
  }
  