import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PropTypes from 'prop-types';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    marginTop: 60
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardText: {
    align: 'left',
    variant: "h6",
    color: "textSecondary"
  },
  avatar: {
    backgroundColor: '#00acc1',
  },
}));

const ResidentCard = ({resident, exitProfileView}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // const [close, setClose] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCloseClick = () => {
    let noResident = '';
    exitProfileView(noResident);
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="resident" className={classes.avatar}>
            {resident.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="cancel" onClick={() => {handleCloseClick()}}>
            <CancelPresentationIcon />
          </IconButton>
        }
        title={resident.name}
        subheader={resident.semester}
      />
      <CardMedia
        className={classes.media}
        image={resident.photo}
        title={`${resident.name}'s Photo`}
      />

      <CardContent>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Age:
        </Typography>
        <Typography paragraph>
         {`${resident.age}`}
        </Typography >
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Interests:
        </Typography>
        <Typography paragraph>
          {`${resident.interests}`}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Previous Career:
        </Typography>
        <Typography paragraph>
          {`${resident.previous_career}`}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Pets:
        </Typography>
        <Typography paragraph>
          {`${resident.pets}`}
        </Typography>      
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Living Preferences:
        </Typography>      
        <Typography paragraph>
          {`${resident.living_preferences}`}
        </Typography>     
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Additional Notes:
        </Typography>      
        <Typography paragraph>
          {`${resident.additional_notes}`}
        </Typography>    
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="liked, application in process">
          <FavoriteIcon />
        </IconButton>
        <Button variant="outlined" color="secondary" aria-label="apply for housing">
              Apply for Housing
        </Button>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography align='left' variant="h6" color="textSecondary">
            Height: {`${resident.height}`}
          </Typography>
          <Typography align='left' variant="h6" color="textSecondary">
            Weight: {`${resident.weight}`}
          </Typography> 
          <Typography align='left' variant="h6" color="textSecondary">
            PCP: {`${resident.pcp}`}
          </Typography>
          <Typography align='left' variant="h6" color="textSecondary">
            Ambulatory: {`${resident.ambulatory}`}
          </Typography>
          <Typography align='left' variant="h6" color="textSecondary">
            Help With Medications: {`${resident.help_with_medications}`}
          </Typography>
          <Typography align='left' variant="h6" color="textSecondary">
            Other Impairments:{`${resident.other_impairments}`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

ResidentCard.propTypes = {
  resident: PropTypes.object
}

export default ResidentCard;