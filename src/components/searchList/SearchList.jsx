import "./searchList.css";

const SearchList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <div className="searchItem">
          <img src={item.image_url} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance} from center</span>
            <span className="siTaxiOp">{item.tag}</span>
            <span className="siSubtitle">{item.description}</span>
            <span className="siFeatures">{item.type}</span>
            <span
              className={item.free_cancel ? "siCancelOp" : "siCancelOpHidden"}
            >
              Free cancellation
            </span>
            <span
              className={
                item.free_cancel ? "siCancelOpSubtitle" : "siCancelOpHidden"
              }
            >
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>{item.rate_text}</span>
              <button>{item.rate}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">${item.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
