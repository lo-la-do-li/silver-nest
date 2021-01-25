import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";
import PropTypes from "prop-types";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import turingHealthLogo from "../turingHealthLogo.png";
import useGlobal from "../store";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
    textAlign: "left",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
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
  medText: {
    align: "left",
    fontSize: "16",
    color: "textSecondary",
  },
  avatar: {
    backgroundColor: "#00acc1",
  },
  info: {
    marginRight: "5vw",
    marginLeft: "5vw",
  },
  heartImg: {
    height: 38,
    paddingRight: 15,
  },
}));

function Profile({ resident, exitProfileView, isAvailable }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [globalState, globalActions] = useGlobal();
  const [residentsApplied, setResidentsApplied] = useGlobal(
    (state) => state.residentsApplied
  );

  const handleOpenDialogue = () => {
    setOpen(true);
  };

  const handleCloseDialogue = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCloseProfile = () => {
    let noResident = "";
    exitProfileView(noResident);
  };

  const handleApplyAgree = (resident) => {
    globalActions.saveResidentApplied(resident);
    globalActions.determineApplyStatus(resident);
    handleCloseDialogue();
  };

  const handleApplyDisagree = () => {
    handleCloseDialogue();
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
          <IconButton
            aria-label="cancel"
            onClick={() => {
              handleCloseProfile();
            }}
          >
            <CancelPresentationIcon fontSize="large" />
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
      <CardContent className={classes.info}>
        <Typography variant="h6" color="textSecondary">
          Age:
        </Typography>
        <Typography paragraph>{`${resident.age}`}</Typography>
        <Typography variant="h6" color="textSecondary">
          Interests:
        </Typography>
        <Typography paragraph>{`${resident.interests}`}</Typography>
        <Typography variant="h6" color="textSecondary">
          Previous Career:
        </Typography>
        <Typography paragraph>{`${resident.previous_career}`}</Typography>
        <Typography variant="h6" color="textSecondary">
          Pets:
        </Typography>
        <Typography paragraph>{`${resident.pets}`}</Typography>
        <Typography variant="h6" color="textSecondary">
          Living Preferences:
        </Typography>
        <Typography paragraph>{`${resident.living_preferences}`}</Typography>
        <Typography variant="h6" color="textSecondary">
          Additional Notes:
        </Typography>
        <Typography paragraph>{`${resident.additional_notes}`}</Typography>
      </CardContent>
      {/* {isAvailable && ( */}
      <CardActions disableSpacing>
        {resident.applied && (
          <>
            <img
              className={classes.heartImg}
              src={turingHealthLogo}
              alt="application-in-process"
            />
            <Button
              variant="outlined"
              color="secondary"
              aria-label="application-pending"
            >
              Application Pending
            </Button>
          </>
        )}
        {!resident.applied && (
          <div>
            <Button
              onClick={handleOpenDialogue}
              variant="outlined"
              color="secondary"
              aria-label="apply for housing"
            >
              Apply for Housing
            </Button>
            <Dialog
              open={open}
              onClose={handleCloseDialogue}
              aria-labelledby="alert-dialog-apply-for-housing"
              aria-describedby="alert-dialog-agree-or-disagree"
            >
              <DialogTitle id="alert-dialog-apply">
                Submit Application?
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Choose "Agree" if you would like to submit your application to
                  house with {resident.name} for the semester of{" "}
                  {resident.semester}. You will be notified via email if you are
                  selected for this residency position pending approval.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleApplyDisagree} color="secondary">
                  Disagree
                </Button>
                <Button
                  onClick={() => handleApplyAgree(resident)}
                  color="secondary"
                  autoFocus
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        )}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show-medical-details"
        >
          <LocalHospitalRoundedIcon color="secondary" />
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent align="left" className={classes.medText}>
          <Typography
            paragraph="true"
            align="left"
            variant="h6"
            color="textPrimary"
          >
            <b>Medical Information</b>
          </Typography>
          <Typography className={classes.medText}>
            <b>Height:</b> {`${resident.height}`}
          </Typography>
          <Typography>
            <b>Weight:</b> {`${resident.weight}`}
          </Typography>
          <Typography>
            <b>PCP:</b> {`${resident.pcp}`}
          </Typography>
          <Typography>
            <b>Ambulatory:</b> {`${resident.ambulatory}`}
          </Typography>
          <Typography>
            <b>Help With Medications:</b> {`${resident.help_with_medications}`}
          </Typography>
          <Typography>
            <b>Other Impairments:</b> {`${resident.other_impairments}`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

Profile.propTypes = {
  resident: PropTypes.object,
  exitProfileView: PropTypes.func,
};

export default Profile;
