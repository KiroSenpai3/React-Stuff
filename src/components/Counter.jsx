import React , {useState} from 'react'

function Counter () {

    const [count, setCount] = useState(0)

      function addCount() {
        setCount(count + 1)
      }

      function resetCount (){
        setCount(0)
      }

  return (
    <div>
      <p>{count}</p>
      <button onClick={addCount}>add</button>
      <button onClick={resetCount}>reset</button>
    </div>
  )
}

export default Counter;