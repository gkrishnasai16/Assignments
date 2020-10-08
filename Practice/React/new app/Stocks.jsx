import React from "react";
import './style/app.css'
import './style/header.css'
import { stockData } from "./model/data";
  export const Stocks = () => {
  return (
    <p>
      <HomePageHeader />
      <div>
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                company={data.company}
                ticker={data.ticker}
                stockPrice={data.stockPrice}
                timeElapsed={data.timeElapsed}
              />
            </div>
          );
        })}
      </div>
    </p>
  );
};

const HomePageHeader = () => {
  return (
    <details>
                  <summary> Details </summary>
                  <p>PARA</p>
              </details>
  );
};

const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
  if (!company) return <div />;
  return (
    <details>
      <summary>Details</summary>
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{company}</h5>
          </td>
          <td>
            <h5>{ticker}</h5>
          </td>
          <td>
            <h4>{stockPrice}</h4>
          </td>
          <td>
            <p>{timeElapsed}</p>
          </td>
        </tr>
      </tbody>
    </table>
    </details>
  );
};
