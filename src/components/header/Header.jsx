import { useState } from "react";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // su kien nut search

  const handlerSearch = () => {
    window.location.replace("/search");
  };
  // render header
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTilte">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          {/* chọn địa điểm */}
          <div className="headerSearchItem">
            <i className=" headerIcon fa fa-bed" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>

          {/* chọn thời gian */}
          <div className="headerSearchItem">
            <i className=" headerIcon fa fa-calendar-days" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                className="date"
                minDate={new Date()}
                onChange={(item) => setDate([item.selection])}
                ranges={date}
              />
            )}
          </div>

          {/* chọn phòng */}

          <div className="headerSearchItem">
            <i className=" headerIcon fa fa-person" />
            <span className="headerSearchText">{`1  adult - 0 children - 1 room`}</span>
          </div>
          {/*nut Search */}
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handlerSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
