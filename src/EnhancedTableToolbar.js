import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import StarsIcon from '@material-ui/icons/Stars';

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
  
  const EnhancedTableToolbar = ({history,selected,numSelected,setSelected}) => {
    const classes = useToolbarStyles();
  
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
          </Typography>
        ) : ( <>
   
          </>
        )}
  
        {numSelected > 0 ? (
          <Tooltip >
    <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<StarsIcon />}
          onClick = { () => { localStorage.setItem("Favourites" , JSON.stringify(selected) ) 
          setSelected([]);
        alert("Added to favourites section")
        }   }
        >
        Add as favourite
        </Button> 
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
            
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  export default EnhancedTableToolbar;