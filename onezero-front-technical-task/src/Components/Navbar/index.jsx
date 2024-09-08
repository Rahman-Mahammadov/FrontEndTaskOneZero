import { useEffect, useState } from "react";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categories/categorySlice";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = ["All"];
  const data = useSelector((state) => state.category);
  data.categories?.categories?.forEach((cat) => {
    categories.push(cat.name[0].value);
  });

  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    decodeURIComponent(location.pathname.split("/")[2])
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      {data.loading && <div>Loading...</div>}
      {data.loading && data.error ? <div>Error: {data.error}</div> : null}

      {!data.loading && categories?.length > 1 ? (
        <div className="navbar">
          {categories.map((category) => {
            return (
              <>
                <button
                  key={category}
                  className={`tab-button ${
                    activeTab === category ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(category);
                    navigate(`category/${category}`);
                  }}
                >
                  {category}
                </button>
              </>
            );
          })}
        </div>
      ) : (
        "hello"
      )}
    </div>
  );
};

export default Navbar;
