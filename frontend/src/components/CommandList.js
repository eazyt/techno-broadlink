import { makeStyles } from '@material-ui/core/styles';
import { bool, array, func } from 'prop-types';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Grid from '@material-ui/core/Grid';

export default function CommandList(props) {
  const classes = useStyles();
  const { commands, handleSendClick, handleDeleteClick, disabled } = props;
  return (
    <List className={classes.root}>
      {commands.map(command => {
        return (
          <Grid
            container
            key={command.id}
            direction="row"
            alignItems="flex-start"
            justify="space-between"
          >
            <Box item pl={2} component={Grid}>
              <Typography display="inline" variant="h5" component="h2">
                {command.name}
              </Typography>
            </Box>
            <Box item pr={2} component={Grid}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<PlayCircleOutlineIcon />}
                onClick={() => handleSendClick(command.id)}
                disabled={disabled}
              >
                Send
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<HighlightOffIcon />}
                onClick={() => handleDeleteClick(command.id)}
                disabled={disabled}
              >
                Delete
              </Button>
            </Box>
          </Grid>
        );
      })}
    </List>
  );
}

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    margin: theme.spacing(1),
  },
}));

CommandList.defaultProps = {};

CommandList.propTypes = {
  commands: array,
  disabled: bool,
  handleDeleteClick: func,
  handleSendClick: func,
};
