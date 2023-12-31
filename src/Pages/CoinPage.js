import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

import { SingleCoin } from "../config/api";
import './CoinsTable.css'

import { LinearProgress, makeStyles, Typography } from "@mui/material";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
   
  }, []);
  console.log(coin)
 

  return <div className="container">
    <div className="sidebar">
    <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
         <Typography variant="h3" sx={{fontWeight:'bold',fontFamily:'Montserrat',color:'red' }}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ width: "100%",
      fontFamily: "Montserrat",
      // padding: 25,
      paddingBottom: 2,
      paddingTop: 0,
      textAlign: "justify",}} >
          {coin?.description.en.split(". ")[0]}.
        </Typography>
        <div className="marketData">
        <span style={{display:'flex',justifyContent:"center",alignItems:"center"}} >
          <Typography variant="h5" sx={{marginTop:'20px'}} >
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
                marginTop:'20px'
              }}
            >
              {coin?.market_cap_rank}
            </Typography>

          </span>
          <span style={{display:'flex', justifyContent:"center",alignItems:"center"}} >
          <Typography variant="h5" sx={{marginTop:'20px'}} >
          Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
                marginTop:'20px'
              }}
            >
               {symbol}{" "}
              {
                coin?.market_data.current_price[currency.toLowerCase()]
              }
            </Typography>

          </span>
          <span style={{display:'flex', justifyContent:"center",alignItems:"center"}} >
          <Typography variant="h5" sx={{marginTop:'20px'}} >
          Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
                marginTop:'20px'
              }}
            >
              {symbol}{" "}
              {
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              }
              M
            </Typography>

          </span>

        </div>

    </div>
    

  </div>;
};

export default CoinPage;
