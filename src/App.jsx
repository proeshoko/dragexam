import { useState } from 'react'
import Draggable from 'react-draggable'
import { useDispatch, useSelector } from 'react-redux';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const handleStop = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const finalPosition = useSelector((state) => state.coordinates);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">

        <div className="row">


          <div className="col-sm shadow"  >
            <div className='image-container'>
              <img
                src='https://images.pexels.com/photos/28316692/pexels-photo-28316692/free-photo-of-a-forest-with-a-small-stream-and-trees.jpeg'
                style={{ width: '100%', height: '450px' }}
              />
              <Draggable onDrag={handleDrag} onStop={handleStop}>
                <div className='circle-placeholder'>
                  small
                </div>
              </Draggable>
            </div>
          </div>



          <div className="col-sm shadow">
            <div className='row mb-5'>
              <div className='col-6'>
                <input className='form-control' placeholder='height' type="text" value={position.x} readOnly />
              </div>
              <div className='col-6'>
                <input className='form-control' placeholder='width' type="text" value={position.y} readOnly />
              </div>
            </div>
            <input className='form-control mb-3' />
            <input className='form-control mb-3' />
          </div>
          <div>
              <button className='btn btn-primary mt-3' onClick={() => console.log(`Final Coordinates: X = ${finalPosition.x}, Y = ${finalPosition.y}`)}>
                Show Final Coordinates in Console
              </button>
            </div>
        </div>
      </div>


    </>
  )
}

export default App