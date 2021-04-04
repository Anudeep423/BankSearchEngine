import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Main from "./Main"
import Header from "./Header"

export default  function Home() {

// home
  const [filteredBanks, setFilteredBanks] = useState("");

  const [allBanks, setAllBanks] = useState([]);

  const [bankName, setBankName] = useState("");

  const [city, setCity] = useState();

  const searchBank = (e) => {

 

    if(!city){
      alert("Select city first")
    }else{


    setBankName(e.target.value)
    
    const fill = allBanks.filter((data, i) => {
      if (data.bank_name.includes(e.target.value) || data.ifsc.includes(e.target.value)  ) {
           return data
      } 
    })
    setFilteredBanks(fill)
    }
  }

  const searchCity = (e) => {
    setBankName("")
    setFilteredBanks("")
    setCity(e.target.value);
  
  }

  useEffect(() => {
    fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`).
    then(res => res.json()).
    then(res => { 
      if(res.length > 0){
      localStorage.setItem("Banks" , JSON.stringify(res) )
      }
    setAllBanks(res) 
    } ).catch(err => {
      console.log(err)
    })

  }, [city])

  const BanksToDisplay = filteredBanks ? filteredBanks : allBanks


  return (
    <div>
      <Header 
        city={city}
        searchCity={searchCity}
      bankName={bankName} searchBank={searchBank} placeholder="Search Bank"  />
     { BanksToDisplay  ? <Main Banks = {BanksToDisplay}  /> : "" }
    
    </div>
  )
}
