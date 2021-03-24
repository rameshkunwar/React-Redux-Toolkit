import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/counterSlice'
import {Button} from 'react-bootstrap'

export function Counter(){
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
      <div>
        <Button
          className="btn btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
        className="btn btn-secondary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
    )
}