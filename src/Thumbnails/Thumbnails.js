import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

// import StarBorderIcon from '@material-ui/icons/StarBorder';


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
    color: theme.palette.primary,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

// const residents = [
 
//   {
//     img: 'https://previews.123rf.com/images/natakot/natakot1810/natakot181001281/110094284-happy-old-man-showing-thumbs-up-working-out-with-a-dumbbell.jpg',
//     title: 'Ralph',
//     author: 'author',
//    },
//    {
//     img: 'https://erinwritesnow.files.wordpress.com/2017/01/cute-happy-older-lady.jpg',
//     title: 'Doris',
//     author: 'author',
//     },
//     {
//     img: 'https://previews.123rf.com/images/natakot/natakot1810/natakot181001281/110094284-happy-old-man-showing-thumbs-up-working-out-with-a-dumbbell.jpg',
//     title: 'Ralph',
//     author: 'author',
//    },
//     {
//     img: 'https://erinwritesnow.files.wordpress.com/2017/01/cute-happy-older-lady.jpg',
//     title: 'Doris',
//     author: 'author',
//     },
//    {
//     img: 'https://erinwritesnow.files.wordpress.com/2017/01/cute-happy-older-lady.jpg',
//     title: 'Doris',
//     author: 'author',
//     },
//     {
//     img: 'https://previews.123rf.com/images/natakot/natakot1810/natakot181001281/110094284-happy-old-man-showing-thumbs-up-working-out-with-a-dumbbell.jpg',
//     title: 'Ralph',
//     author: 'author',
//    },
//  ];
 
export default function SingleLineGridList({availableResidents, semesterAvailable}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {availableResidents.map((resident) => (
          <GridListTile key={resident.photo}>
            <img src={resident.photo} alt={resident.name} />
            <GridListTileBar
              title={resident.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${resident.name}`}>
                  {/* <StarBorderIcon className={classes.title} /> */}
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}