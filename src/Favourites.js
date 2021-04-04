import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import Main from "./Main"

function Favourites(props) {
    const Banks = JSON.parse(localStorage.getItem("Banks"));
    const Favourites = localStorage.getItem("Favourites")
    const FavouriteBanks = Banks.filter((data, i) => Favourites.indexOf(data.ifsc) !== -1)

    return (
        <div>
            <br></br>
            <br></br>

            <Link to="/"  >   <Button
                variant="contained"
                color="primary"
                size="small"
            >
                Home
      </Button>
            </Link>

            <h1>Your favourite banks</h1>

            <Main favouritess={true} Banks={FavouriteBanks} />

        </div>
    )
}

export default Favourites
