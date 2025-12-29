import React, { Suspense } from "react";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import Auctions from "./components/Auctions/Auctions";

const bidsFetch = async() => {
  const bidsFetch = await fetch('products.json');
  const bids = await bidsFetch.json();
  return bids;
}

function App() {
  const bidsPromise = bidsFetch();
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <Suspense fallback={<p>loading ..</p>}>
        <Auctions bidsPromise={bidsPromise}></Auctions>
      </Suspense>
    </>
  );
}

export default App
