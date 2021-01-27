import React, { useState, useEffect } from "react";
import useGlobal from "../store";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    paddingTop: "3vh",
    paddingBottom: "10px",
    //345
  },
  media: {
    height: "40vh",
    //140
  },
  content: {
    padding: "10px",
    // marginLeft: "25%",
    color: "#31424c",
    textAlign: "left",
  },
  buttonBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "capitalize",
    paddingLeft: "10px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  paper: {
    maxWidth: 400,
    padding: "1.5vh",
    backgroundColor: "#9a9ca21f",
  },
  avatar: {
    backgroundColor: "#00acc1",
  },
  avatar2: {
    backgroundColor: "#d86464",
  },
  messageArea: {
    height: "100%",
    width: "100%",
    overflowY: "auto",
    padding: 1,
  },
  userChatItem: {
    justifyContent: "flex-end",
  },
  residentChatItem: {
    justifyContent: "flex-start",
  },
}));

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
  const [expanded, setExpanded] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [message, setMessage] = useState("");
  const [globalState, globalActions] = useGlobal();
  const [residentsApplied, setResidentsApplied] = useGlobal(
    (state) => state.residentsApplied
  );

  useEffect(() => {
    let updatedMsg;
    if (resident.message === undefined) {
      updatedMsg = "...";
    } else {
      updatedMsg = resident.message;
    }
    setMessage(updatedMsg);
  }, [resident.message]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const updateMessage = (event) => {
    event.preventDefault();
    setMessageValue(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleSendMessage = () => {
    const newMessage = messageValue;
    const residentToMessage = resident;
    setMessage(newMessage);
    globalActions.addMessageToApplied(residentToMessage, newMessage);
    setMessageValue("");
  };

  return (
    <Card className={classes.root} id={id} key={key}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={`photo of ${name}`}
        />
        <CardContent>
          <div className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" component="p">
              <b>Semester : </b> {semester}
            </Typography>
            <Typography variant="body2" component="p">
              <b> Date Applied : </b> {dateApplied}
            </Typography>
            <Typography variant="body2" component="p">
              <b> Status :</b> Pending Approval
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions disableSpacing>
        <>
          <div className={classes.buttonBar}>
            <Typography
              variant="button"
              color="textSecondary"
              style={{ paddingRight: "10px" }}
            >
              Message {name}
            </Typography>
            <ChatOutlinedIcon color="secondary" />
          </div>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            value={id}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent>
          <Grid container>
            <List className={classes.messageArea}>
              <ListItem className={classes.residentChatItem} key="1">
                <ListItemIcon style={{ paddingRight: "0px" }}>
                  <Avatar
                    // src={image}
                    // alt={name}
                    aria-label={`resident ${name}'s avatar`}
                    size="small"
                    className={classes.avatar}
                  >
                    {name[0]}
                  </Avatar>
                </ListItemIcon>
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Typography>{`Hello, I'm ${name}`}</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </ListItem>

              <ListItem className={classes.userChatItem} key={message}>
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Typography>{message}</Typography>
                    </Grid>
                  </Grid>
                </Paper>

                <ListItemIcon style={{ paddingLeft: "15px" }}>
                  <Avatar
                    aria-label="user's avatar"
                    size="small"
                    className={classes.avatar2}
                  >
                    U
                  </Avatar>
                </ListItemIcon>
              </ListItem>
            </List>

            <Grid container style={{ padding: "30px 0px 15px 20px" }}>
              <Grid item xs={10}>
                <form onSubmit={submitHandler}>
                  <TextField
                    id="outlined-basic-email"
                    label="Type a message"
                    value={messageValue}
                    onChange={updateMessage}
                    fullWidth
                  />
                </form>
              </Grid>
              <Grid xs={1} align="right">
                <Fab
                  size="small"
                  color="primary"
                  aria-label="send-message"
                  onClick={handleSendMessage}
                >
                  <SendIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AppliedCard;
