import "./featuredProperties.css";

const FeaturedProperties = (props) => {
  //sang trang detail
  const handlerDetail = () => {
    window.location.replace("/detail");
  };

  //render
  return (
    <div className="fp">
      {props.items.map((item, i) => (
        <div key={i} className="fpItem" onClick={handlerDetail}>
          <img src={item.image_url} alt="" className="fpImg" />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Staring from ${item.price}</span>
          <div className="fpRating">
            <button>{item.rate}</button>
            <span>{item.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FeaturedProperties;
