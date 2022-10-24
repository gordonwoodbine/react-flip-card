import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import clsx from 'clsx';
import { useState } from 'react';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
  },
  card: {
    height: '300px',
    marginTop: '30px',
    width: '300px',
    position: 'relative',
    transform: 'perspective(1000px)',
    transformStyle: 'preserve-3d',
    overflow: 'visible',
    transition: '1s',
  },
  media: {
    height: 0,
    paddingTop: '56%',
    filter: 'grayscale(75%)',
    '&:hover': {
      filter: 'grayscale(50%)',
    },
    transition: 'filter 1s',
    // marginTop: 30,
  },
  front: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
  },
  back: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    padding: '10px',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
  },
  flipped: {
    transform: 'rotateY(180deg)',
    '& $front': {
      '& $button': {
        pointerEvents: 'none',
      },
    },
  },
});

function App() {
  const classes = useStyles();
  const [cardStyle, setCardStyle] = useState(null);
  const handleClick = (e) => {
    e.stopPropagation();
    if (!cardStyle) {
      setCardStyle(classes.flipped);
    } else setCardStyle(null);
  };
  return (
    <Container maxWidth='sm' className={classes.container}>
      <Card className={clsx(classes.card, cardStyle)}>
        <Box className={classes.front}>
          <CardHeader
            avatar={<Avatar>SP</Avatar>}
            title='Test Card'
            subheader='Will this work?'
            className={classes.header}
            action={
              <IconButton onClick={handleClick} className={classes.button}>
                <HelpOutlineIcon />
              </IconButton>
            }
          />
          <CardMedia
            image='https://images.all-free-download.com/images/graphiclarge/orange_textile_background_16_211120.jpg'
            title='Test Image'
            className={classes.media}
          />
        </Box>
        <Box className={classes.back}>
          <CardHeader
            avatar={<Avatar>SP</Avatar>}
            title='Test Card'
            subheader='Will this work?'
            action={
              <IconButton onClick={handleClick}>
                <HelpOutlineIcon />
              </IconButton>
            }
          />
          <CardContent>Back!</CardContent>
        </Box>
      </Card>
    </Container>
  );
}

export default App;
