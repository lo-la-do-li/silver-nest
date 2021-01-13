import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
}));
function Form({selectSemester}) {
  const classes = useStyles();
  const [semester, setSemester] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    const selectedSemester = event.target.value;
    selectSemester(selectedSemester);
    setSemester(selectedSemester);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl} semester={semester}>
        <InputLabel id="dropdown-menu">Choose a semester</InputLabel>
        <Select
          labelId="dropdown-menu"
          id="semester-dropdown"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={semester}
          onChange={handleChange}
        >
          <MenuItem value='Spring-2021'>Spring 2021</MenuItem>
          <MenuItem value='Summer-2021'>Summer 2021</MenuItem>
          <MenuItem value='Fall-2021'>Fall 2021</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

Form.propTypes = {
  selectSemester: PropTypes.func
}

export default Form;