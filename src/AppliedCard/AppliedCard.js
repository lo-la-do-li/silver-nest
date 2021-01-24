import React, { useState, useEffect } from "react";
import useGlobal from "../store";
import { fetchAllResidents } from "../apiCalls";
import Profile from "../Profile/Profile";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    //345
  },
  media: {
    height: 300,
    //140
  },
  buttonText: {
    paddingLeft: 15,
  },
});

const AppliedCard = ({
  resident,
  id,
  key,
  name,
  image,
  age,
  semester,
  dateApplied,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={key}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={`photo of ${name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Semester: {semester}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Date Applied: {dateApplied}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>
          <Button size="small" color="primary">
            <ChatOutlinedIcon color="secondary" />
            <span className={classes.buttonText}>Message {name}</span>
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default AppliedCard;
