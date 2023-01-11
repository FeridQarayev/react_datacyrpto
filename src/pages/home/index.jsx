import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { getCyrptosByPageNumber } from "../../service/getCyrptosByPageNumber";
import { addProductToFavorites } from "../../redux/slice/favorites";
import "../style.css";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

export const Home = () => {
  const [cyrptos, setCyrptos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getCyrptosByPageNumber(pageNumber).then((res) => {
      if (res.status === 200) {
        setCyrptos(res.data);
      }
    });
  }, [pageNumber]);
  return (
    <div className="home">
      <Navbar />
      <div className="modal">
        <div className="modal__up">
          <h2>Cyrpto Tracker Application</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Search by cyrpto name"
              onChange={(e) => setInputVal(e.target.value)}
            />
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="sc-hBUSln eAmuix"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm27.11-152.54l-45.01-13.5c-5.16-1.55-8.77-6.78-8.77-12.73 0-7.27 5.3-13.19 11.8-13.19h28.11c4.56 0 8.96 1.29 12.82 3.72 3.24 2.03 7.36 1.91 10.13-.73l11.75-11.21c3.53-3.37 3.33-9.21-.57-12.14-9.1-6.83-20.08-10.77-31.37-11.35V112c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v16.12c-23.63.63-42.68 20.55-42.68 45.07 0 19.97 12.99 37.81 31.58 43.39l45.01 13.5c5.16 1.55 8.77 6.78 8.77 12.73 0 7.27-5.3 13.19-11.8 13.19h-28.1c-4.56 0-8.96-1.29-12.82-3.72-3.24-2.03-7.36-1.91-10.13.73l-11.75 11.21c-3.53 3.37-3.33 9.21.57 12.14 9.1 6.83 20.08 10.77 31.37 11.35V304c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-16.12c23.63-.63 42.68-20.54 42.68-45.07 0-19.97-12.99-37.81-31.59-43.39z"></path>
            </svg>
          </div>
        </div>
        <div className="modal__body">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th style={{ textAlign: "left" }}>Coin Name</th>
                <th>Price</th>
                <th>Price Change</th>
                <th>Market Cap</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cyrptos
                .filter((fill) => {
                  if (inputVal === "") return fill;
                  if (
                    fill.name.toLowerCase().includes(inputVal.toLowerCase()) ||
                    fill.market_cap_rank
                      .toString()
                      .includes(inputVal.toLowerCase()) ||
                    fill.current_price
                      .toString()
                      .includes(inputVal.toLowerCase()) ||
                    fill.price_change_percentage_24h
                      .toString()
                      .includes(inputVal.toLowerCase()) ||
                    fill.market_cap.toString().includes(inputVal.toLowerCase())
                  )
                    return fill;
                })
                .map((cyrpto, index) => {
                  return (
                    <tr key={index}>
                      <td className="cyrpto__rank">{cyrpto.market_cap_rank}</td>
                      <td className="cyrpto__coin">
                        <img
                          src={cyrpto.image}
                          alt={cyrpto.name}
                          className="cyrpto__logo"
                        />
                        {" " + cyrpto.name}
                      </td>
                      <td className="cyrpto__number cyrpto__price">
                        ${cyrpto.current_price}
                      </td>
                      <td
                        className={
                          cyrpto.price_change_percentage_24h >= 0
                            ? "cyrpto__number cyrpto__price__increase"
                            : "cyrpto__number cyrpto__price__decrease"
                        }
                      >
                        {cyrpto.price_change_percentage_24h}%
                        {cyrpto.price_change_percentage_24h > 0 ? (
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            className="CryptoTable_icon__jZ1Kk"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            className="CryptoTable_icon__jZ1Kk"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </td>
                      <td className="cyrpto__number cyrpto__marketCap">
                        ${cyrpto.market_cap}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            dispatch(addProductToFavorites(cyrpto));
                            toast.success("Successfully added favorites!");
                          }}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="modal__down">
          {pageNumber<=1?
          <button disabled className="pagenationBtn pagenationBtnDisabled"
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}>
            🡠 Previous Page
          </button>:
          <button className="pagenationBtn"
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}>
            🡠 Previous Page
          </button>
          }
          <h3>Page {pageNumber}</h3>
          {127<=pageNumber?
          <button
          disabled
            className="pagenationBtn pagenationBtnDisabled"
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            Next Page 🡢
          </button>:
          <button
            className="pagenationBtn"
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            Next Page 🡢
          </button>
          }
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Footer />
    </div>
  );
};

export default Home;
