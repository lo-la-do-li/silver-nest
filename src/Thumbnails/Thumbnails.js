import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.secondary,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
 
export default function SingleLineGridList({availableResidents, allResidents, selectResident, semesterAvailable}) {
  const classes = useStyles();
 
  const handleClick = (resident) => { 
    // let clickedResident = event.target.value
    console.log(resident)
    selectResident(resident)
  }
  if (availableResidents.length) {
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {availableResidents.map((resident, index) => (
            <GridListTile key={index} value={resident.id} onClick={() => handleClick(resident)}>
              <img src={resident.photo} key={resident.id} id={resident.id} alt={resident.name} />
              <GridListTileBar
                title={resident.name}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${resident.name}`} >
                    <StarBorderIcon className={classes.title}/>
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {allResidents.map((resident, index) => (
            <GridListTile key={index} value={resident.id} onClick={() => handleClick(resident)}>
              <img src={resident.photo} key={resident.id} id={resident.id} alt={resident.name} />
              <GridListTileBar
                title={resident.name}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${resident.name}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}