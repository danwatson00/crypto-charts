import React, { FC, ReactElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import HomeLineChart from './LineChart';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const cryptos = 'BTC,ETH,XRP';
const apiKey = '834b3fe7441c645e2145a00b61624f4806894ed3';

const Home: FC = (): ReactElement => {
  
    const [historicData, setHistoricData] = useState();
    const [tickers, setTickers] = useState();
    const [currencies, setCurrencies] = useState();
    const [markets, setMarkets] = useState();
    const [trending, setTrending] = useState();
    const [today, setToday] = useState(new Date());

    useEffect(() => {
        // getData();
        // setTimeout(() => { getCurrencies(); }, 1500);
        
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then(response => response.json()) 
        .then(data => {
            setMarkets(data);
            console.log("markets", data);
        });
        fetch(`https://api.coingecko.com/api/v3/search/trending`)
        .then(response => response.json()) 
        .then(data => {
            setTrending(data);
            console.log("trending", data);
        });
        // fetch(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${cryptos}&interval=1d,30d&convert=USD&platform-currency=ETH&per-page=100&page=1`)
        // .then(response => response.json()) 
        // .then(data => {
        //     setTickers(data);
        //     console.log("tickerData", data);
        // });
        // // setTimeout(() => {
        //     fetch(`https://api.nomics.com/v1/currencies?key=834b3fe7441c645e2145a00b61624f4806894ed3&ids=BTC,ETH,XRP&attributes=id,name,logo_url`)
        //     .then(response => response.json())
        //     .then(data => {
        //         setCurrencies(data);
        //         console.log("currencies", data);
        //     });
        // }, 1500);
        // let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
        // let coinApiKey = 'd539a531-cbea-4625-8c87-fef7643b840e';
        // let qString = "?CMC_PRO_API_KEY=" + coinApiKey + "&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD";
        //     fetch( url, {
        //         mode: 'no-cors'
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         setCurrencies(data);
        //         console.log("currencies", data);
        //     });
       
        // setTimeout(() => {
        //     fetch(`https://api.nomics.com/v1/volume/history?key=${apiKey}&start=2022-01-01T00%3A00%3A00Z&end=2022-01-14T00%3A00%3A00Z&convert=USD`)
        //     .then(response => response.json())
        //     .then(data => {
        //         setHistoricData(data);
        //         console.log("volume", data)
        //     });
        // }, 3000);
    }, []);

    return (
        <Paper elevation={3}>
            <Box display="flex" width={900} height={80}>
                <Box m="auto">
                    <Typography>
                        Crytpo Trends for {today.toLocaleDateString()}
                    </Typography>
                </Box>
            </Box>
            <Box>
                
            </Box>
            <Box width={900}>
                <HomeLineChart />
            </Box>
        </Paper>
    )
};

export default Home;