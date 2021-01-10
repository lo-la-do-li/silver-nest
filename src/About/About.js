import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import turingSHSLogo from '../geometric-heart-logo.png'


const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      // flexWrap: 'wrap',
      justifyContent: 'space-around',
      // overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      flexDirection: 'row',
      height: "100vh"
    },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
   gridList: {
    // width: 500,
    // height: 100%,
  },
//   .MuiButton-outlined {
//     // border: 1px solid rgba(0, 0, 0, 0.23);
//     padding: 10px 15px;
// }
  }));

const tileData = [
  {
    img: "https://ak.picdn.net/offset/photos/5f6d0e80a75ca0db370a31bc/medium/offset_1009282.jpg",
    title: "image1",
    cols: 1
  },
   {
    img: "https://c8.alamy.com/comp/BX103M/party-event-in-older-peoples-residential-retirement-community-BX103M.jpg",
    title: "image2",
    cols: 2
  },
   {
    img: "https://c8.alamy.com/comp/JAJ1TK/students-and-seniors-making-small-talk-in-workshop-break-JAJ1TK.jpg",
    title: "image3",
    cols: 2
  },
  {
    img: "https://c8.alamy.com/comp/D51WWG/senior-klara-fuerst-78-and-student-sarah-boehm-20-cut-fruit-at-the-D51WWG.jpg",
    title: "image4",
    cols: 1
  },
  {
    img: "https://www.theexaminernews.com/examiner-news/wp-content/uploads/2020/11/WPAssistedLiving-400x217.jpg",
    title: "image5",
    cols: 3
  }
]

const About = () => {
  const classes = useStyles();
  return (
     <div className={classes.root}>
      {/* <Box display="flex" flexDirection="column" alignItems="stretch" padding={4}>
       <h1>Turing School of Health Sciences has partnered with Mountain View Residences, a senior independent living residence, to match qualified Health Sciences Students to elderly residents living in the community based on compatibility of living preferences, needs, and schedules.</h1>
       </Box> */}
      {/* <Container maxWidth="lg" className={classes.container}>
       Turing School of Health Sciences has partnered with Mountain View Residences, a senior independent living residence, to match qualified Health Sciences Students to elderly residents living in the community based on compatibility of living preferences, needs, and schedules.
       </Container> */}
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}

      </GridList>
       <div>
      <Box padding={7}>
        {/* <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
        <h1 style={{padding: "10", color:"#7c8181"}}>Silvernest</h1>
        <img className="App-logo" src={turingSHSLogo} alt='Turing School of Health Sciences'/>
        </div> */}
       <h1 style={{textAlign: 'left', color:"#7c8181"}}>Turing School of Health Sciences has partnered with Mountain View Residences, a senior independent living residence, to match qualified Health Sciences Students to elderly residents living in the community based on compatibility of living preferences, needs, and schedules.</h1>
       </Box>
       <Button style={{padding: 20}} variant="outlined" color="primary">
  Find a Roomate
</Button>
       </div>
    </div>
  )
}

export default About;