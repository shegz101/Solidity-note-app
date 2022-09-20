import './App.css';

function App() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let noteDate = new Date();
  return (
    <div className="note-app">
      <h1 style={{textAlign: 'center'}}>Notepad</h1>
      <div className='input__section'>
        <div className='title_input'>
          <input type='text' className='note__title' placeholder='Enter tltle here'/>
          <textarea className='note__input' placeholder='note something down'></textarea>
        </div>

        <div className='btn__grp'>
          <button>Add</button>
          <button>Clear</button>
        </div>
      </div>

      <hr style={{width: '70vw', marginTop: '20px'}}/>

      <div className='saved__notes'>
        <h1>Saved Notes</h1>
        <div className='save__box'>
          <div className="saved-inputs">
            <p className="saved-title">
              Solidity
            </p>
            <p className="saved-text">
              This is a basic solidity article
            </p>
            <p className="current-date">{`${days[noteDate.getDay()]}, ${noteDate.getDate()} ${months[noteDate.getMonth()]} ${noteDate.getFullYear()}`}</p>
            <button className="view-button">View</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>

      <div className="modal">
          <div className="modal-header">
            <div className="title">

            </div>
            <button className="close-button">&times;</button>
          </div>
          <div className="modal-body">
               
          </div>

          <div className="modal-time"></div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
