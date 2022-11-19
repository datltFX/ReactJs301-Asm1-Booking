import "./detailItem.css";
const DetailItem = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <div className="detail">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="detailTitle">{item.name}</h1>
          <div className="detailAddress">
            <i className="fa fa-location-dot" />
            <span>{item.address}</span>
          </div>
          <span className="detailDistance">{item.distance}</span>
          <span className="detailPriceHighlight">{item.price}</span>
          <div className="detailImages">
            {item.photos.map((photo) => (
              <div className="detailImgWrapper">
                <img src={photo} alt="" className="detailImg" />
              </div>
            ))}
          </div>
          <div className="detailDetails">
            <div className="detailDetailsTexts">
              <h1 className="detailTitle">{item.title}</h1>
              <p className="detailDesc">{item.description}</p>
            </div>
            <div className="detailDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${item.nine_night_price}</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailItem;
