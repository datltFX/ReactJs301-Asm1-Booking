import "./searchPopup.css";

const SearchPopup = () => {
  return (
    <div className="popupSearch">
      <h1 className="ppTitle">Search</h1>
      <div className="ppItem">
        <label>Destination</label>
        <input type="text" />
      </div>
      <div className="ppItem">
        <label>Check-in date</label>
        <input type="text" />
      </div>
      <div className="ppItem">
        <label>Options</label>
        <div className="ppOptions">
          <div className="ppOptionItem">
            <span>
              Min price <small>per night</small>
            </span>
            <input type="number" className="ppOptionInput" />
          </div>
          <div className="ppOptionItem">
            <span>
              Max price <small>per night</small>
            </span>
            <input type="number" className="ppOptionInput" />
          </div>
          <div className="ppOptionItem">
            <span>Adult</span>
            <input type="number" className="ppOptionInput" value="1" />
          </div>
          <div className="ppOptionItem">
            <span>Children</span>
            <input type="number" className="ppOptionInput" value="0" />
          </div>
          <div className="ppOptionItem">
            <span>Room</span>
            <input type="number" className="ppOptionInput" value="1" />
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchPopup;
