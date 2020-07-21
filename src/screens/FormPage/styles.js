import { makeStyles,withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
export const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
      },
      thumb: {
        height: 7,
        width: 7,
        backgroundColor: '#fff',
        marginTop: -4,
        marginLeft: -4,
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
          background: 'transparent',
          color: '#000',
        },
      },
      track: {
        height: 2,
      },
      rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
      },
      mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
      },
      markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
    })(Slider);
    
    const PrettoSlider = withStyles({
      root: {
        color: '#52af77',
        height: 8,
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
          boxShadow: 'inherit',
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: 8,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
      },
    })(Slider);

export default IOSSlider;
