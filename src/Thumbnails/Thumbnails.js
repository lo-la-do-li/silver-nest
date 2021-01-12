import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import PropTypes from 'prop-types';


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
    fontSize: 24,
  },
  icon: {
    color: '#00acc1',
    backgroundColor: 'white'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
 
function Thumbnails({availableResidents, allResidents, selectResident, semesterAvailable}) {
  const classes = useStyles();
 
  const handleClick = (resident) => {
    selectResident(resident)
  }
  
  if (availableResidents.length) {
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {availableResidents.map((resident, index) => (
            <GridListTile key={index} onClick={() => handleClick(resident)}>
              <img src={resident.photo} id={resident.id} alt={resident.name} />
              <GridListTileBar
                title={resident.name}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${resident.name}`} >
                    <AccountBoxIcon className={classes.title}/>
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
            <GridListTile key={index} onClick={() => handleClick(resident)}>
              <img src={resident.photo} id={resident.id} alt={resident.name} />
              <GridListTileBar
                title={resident.name}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${resident.name}`}>
                    <AccountBoxIcon className={classes.icon} />
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

Thumbnails.propTypes = {
  availableResidents: PropTypes.array,
  allResidents: PropTypes.array, 
  selectResident: PropTypes.object,
  semesterAvailable: PropTypes.string,
}

export default Thumbnails;