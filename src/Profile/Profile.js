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
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function ResidentCard({resident}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="resident" className={classes.avatar}>
            {resident.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
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
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Height:
        </Typography>
        <Typography paragraph>
          {`${resident.height}`}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Weight:
        </Typography>
        <Typography paragraph>
          {`${resident.weight}`}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          PCP:
        </Typography>
        <Typography paragraph>
          {`${resident.pcp}`}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Ambulatory:
        </Typography>
        <Typography paragraph>
          {`${resident.ambulatory}`}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Help With Medications:
        </Typography>
        <Typography paragraph>
          {`${resident.help_with_medications}`}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Other Impairments:
        </Typography>
        <Typography paragraph>
          {`${resident.other_impairments}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Previous Career:
          </Typography>
          <Typography paragraph>
            {`${resident.previous_career}`}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Interests:
          </Typography>
          <Typography paragraph>
            {`${resident.interests}`}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Pets:
          </Typography>
          <Typography paragraph>
            {`${resident.pets}`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
