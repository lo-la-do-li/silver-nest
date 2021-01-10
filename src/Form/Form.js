import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [semester, setSemester] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSemester(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Choose a semester</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={semester}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Spring 2021'>Spring 2021</MenuItem>
          <MenuItem value='Summer 2021'>Summer 2021</MenuItem>
          <MenuItem value='Fall 2021'>Fall 2021</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}