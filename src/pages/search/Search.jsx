import search from "../../data/search.json";
import footer from "../../data/footer.json";
import "./search.css";
import Navbar from "../../components/navbar/Navbar";
import SearchList from "../../components/searchList/SearchList";
import SearchPopup from "../../components/searchPopup/SearchPopup";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";

const Search = () => {
  return (
    <div>
      <Navbar />
      <div className="searchContainer">
        <div className="searchListContainer">
          <div className="searchWrapper">
            <SearchPopup />
            <div className="searchResult">
              <SearchList items={search} />
            </div>
          </div>
        </div>
        <Contact />
        <Footer items={footer} />
      </div>
    </div>
  );
};

export default Search;
