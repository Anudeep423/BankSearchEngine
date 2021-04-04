
import React from 'react';
import Button from '@material-ui/core/Button';
import { lighten, makeStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import StarsIcon from '@material-ui/icons/Stars';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {Link} from "react-router-dom"

const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: "#388e3c",
            backgroundColor: lighten("#388e3c", 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: "#388e3c"
          },
    title: {
      flex: '1 1 100%',
    },
    margin: {
      margin: theme.spacing(3),
    }
  }));

function Header({bankName, searchBank,placeholder, city , searchCity}) {
    const classes = useToolbarStyles();
    return (
        <div>
                <FormControl className={classes.margin} >
        <InputLabel id="demo-simple-select-helper-label">Select City</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={city}
          onChange={ (e) => searchCity(e)}
        >
          <MenuItem value={"BHUBANESHWAR"}>Bhubaneshwar</MenuItem>
          <MenuItem value={"KERALA"}>Kerala</MenuItem>
          <MenuItem value={"GOA"}>Goa</MenuItem>
          <MenuItem value={"TIRUPATI"}>Tirupati</MenuItem>
          <MenuItem value={"RAMPUR"}>RAMPUR</MenuItem>
        </Select>
        <FormHelperText>Select city of your bank</FormHelperText>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Search Bank</InputLabel>
        <Input
        value={bankName} onChange={searchBank} placeholder= {placeholder}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountBalanceIcon />
            </InputAdornment>
            
            
          }
        />
       <FormHelperText>Search bank by its name / ifcs for accurate results</FormHelperText>
        
      </FormControl>
    <Link to = "/favourites"  >  <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.margin}
        startIcon={<StarsIcon />}
      >
        Favourite Banks
      </Button> </Link>
      
            
        </div>
    )
}

export default Header
