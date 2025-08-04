import React from "react";

//INTERNAL IMPORT
import { useStateContext } from "../Context";
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  TimeLine,
  TokenSale
} from "../Components/index"

const index = () => {

  const { 
    transferNativeToken, 
    buyToken, 
    connectWallet, 
    setAddress, 
    TOKEN_ICO, 
    currentHolder, 
    tokenSale, 
    tokenHolders, 
    nativeToken, 
    balance, 
    address 
  } = useStateContext();
  return (
    <div className="v_dark">
      <Header address={address} setAddress={setAddress} connectWallet={connectWallet} />
      <Banner transferNativeToken={transferNativeToken}/>
      <Service />
      <About/>
      <TokenSale buyToken={buyToken} tokenSale={tokenSale}/>
      <Distribution/>
      <MobileApp/>
      <Contact/>
      <Footer/>
    </div>
  )
  
};

export default index;
