import {useState} from 'react'

function NumPad() {
  const [num, setNum] = useState('')

  function addToString(e) {
    setNum(num + e.target.innerText)
  }

  return (
    <>
      <button id="zero" className="num" onClick={addToString}>
        0
      </button>
      <button id="one" className="num" onClick={addToString}>
        1
      </button>
      <button id="two" className="num" onClick={addToString}>
        2
      </button>
      <button id="three" className="num" onClick={addToString}>
        3
      </button>
      <button id="four" className="num" onClick={addToString}>
        4
      </button>
      <button id="five" className="num" onClick={addToString}>
        5
      </button>
      <button id="six" className="num" onClick={addToString}>
        6
      </button>
      <button id="seven" className="num" onClick={addToString}>
        7
      </button>
      <button id="eight" className="num" onClick={addToString}>
        8
      </button>
      <button id="nine" className="num" onClick={addToString}>
        9
      </button>
      <button id="decimal" className="num" onClick={addToString}>
        .
      </button>
    </>
  );
}

export default NumPad;
