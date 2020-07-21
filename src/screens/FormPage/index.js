import React from 'react'
import Box from '@material-ui/core/Box';
import { Radio, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';

function FormPage() {
    const [type, setType] = React.useState('');
    const [end, setEnd] = React.useState('');
    const [time, setTime] = React.useState('');
    const [years, setYears] = React.useState('');
    const [webCheck, setWebCheck] = React.useState(false)
    const [uiuxCheck, setuiuxCheck] = React.useState('');
    const [mobileCheck, setMobileCheck] = React.useState(false)
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));
    const [webDesignCheck, setWebDesignCheck] = React.useState('');

    const marks = [{value: '10'},{value: '20'}, {value: '30'},{value: '40'},];

    const experience = [{value: '1',label: '0-2 years'},
                    {value: '2', label: '2-4 years'},
                    {value: '3',label: '4-6 years'},
                    {value: '4',label: '>6 years'},];
                    
    const times = [{value: '1',label: '0-6 months'},
                    {value: '2', label: '6-12 months'},
                    {value: '3',label: '12-18 months'},
                    {value: '4',label: '>18 months'},];
                    
    const skills=[{skill:'React'},{skill:'Android Studio'},{skill:'Adobe'},{skill:'Flutter'}]
    
    const valuetext=(value)=> {
          return {value};
        }
    const handleChange = (event) => {
        setType(event.target.value);
        setTime('')
        };
    const handleYearsChange = (event) => {
          setYears(event.target.value);
        };
    const handleTimeChange = (event) => {
          setTime(event.target.value);
        };
    const handleWebChange = () => {
          if(mobileCheck){
              setWebCheck(!webCheck)
              setMobileCheck(!mobileCheck)
          }
          else{
            setWebCheck(!webCheck)
          }
        };
    const handleMobileChange = () => {
            if(webCheck){
              setMobileCheck(!mobileCheck)
              setWebCheck(!webCheck)
            }
            else{
              setMobileCheck(!mobileCheck)
            }
        };
    const handleWebDesignChange = () => {
          if(uiuxCheck){
            setWebDesignCheck(!webDesignCheck)
            setuiuxCheck(!uiuxCheck)
          }
          else{
          setWebDesignCheck(!webDesignCheck)
          }
      };
    const handleUIUXChange = () => {
          if(webDesignCheck){
              setWebDesignCheck(!webDesignCheck)
              setuiuxCheck(!uiuxCheck)
          }
          else{
              setuiuxCheck(!uiuxCheck)
          }
      };
    const handleEndChange  = (event) => {
          setEnd(event.target.value);
        };
    const handleDateChange = (date) => {
          setSelectedDate(date);
        };

    function SelectTextField(props){
        return(
          <TextField select label={props.label} value={props.value} onChange={props.onChange}
            helperText={props.helperText} variant="outlined" 
          >
            {props.array.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )
    }

    function PersonalDetails(){
      return(
          <Grid container direction={"column"} spacing={3} >
            <Typography>Personal details</Typography>
            <Grid item>
              <TextField label="Name" variant="outlined" />
            </Grid>
            <Grid item>
              <TextField label="Email" variant="outlined" />
            </Grid>
            <Grid item>
              <TextField label="Organization" variant="outlined" />
            </Grid>
            <Grid item>
            <SelectTextField label="Select" value={years} onChange={handleYearsChange} 
            helperText="Please select your year of experience" array={experience}/>
            </Grid>
          </Grid>
        );
    }

    function Options(){
      if(webCheck){
          return(
            <RadioGroup  onChange={handleEndChange} >
              <FormControlLabel value="front end" labelPlacement='start'  control={<Radio />} label="Front End"  />
              <FormControlLabel value="back end" labelPlacement='start' control={<Radio />} label="Back End"  />
              <FormControlLabel value="both" labelPlacement='start' control={<Radio />} label="Both"  />
            </RadioGroup>
          );
      } 
      else if(mobileCheck){
          return(
            <RadioGroup  onChange={handleEndChange} >
              <FormControlLabel value="ios" labelPlacement='start'  control={<Radio />} label="iOS"  />
              <FormControlLabel value="android" labelPlacement='start' control={<Radio />} label="Android"  />
              <FormControlLabel value="both" labelPlacement='start' control={<Radio />} label="Both"  />
            </RadioGroup>
          );
      }
    }

    function TimeProject(){
      return(
        <Grid container width={30} direction={"column"} spacing={3} >
          <Typography>Duration of the project</Typography>
            <Grid item>
              <SelectTextField label="Select" value={time} onChange={handleTimeChange} helperText="Select the duration of project" array={times}/>
            </Grid>
            <Grid item>
              <Autocomplete multiple options={skills} getOptionLabel={(option) => option.skill} 
                renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Skills Required" placeholder="Add" /> )} />
            </Grid>
            <Grid item>
              {time!=''&&((webDesignCheck||uiuxCheck)||end)?<Button variant="contained" color="primary" size="large">Save Data</Button>:null}
            </Grid>
        </Grid>
      );
    }

    function DeveloperOptions(){
      return(  
        <FormGroup>
          <Typography>Developer for</Typography>
              <FormControlLabel control={<Switch checked={webCheck} onClick={handleWebChange}name="web" />} label="Web Development"/> 
              {webCheck&&!mobileCheck?<Options/>:null}
              <FormControlLabel control={<Switch checked={mobileCheck} onClick={handleMobileChange} name="mobile" />} label="Mobile Development"/>
              {!webCheck&&mobileCheck?<Options/>:null} <br/>
              <Common/>
        </FormGroup> 
        );
    }

    function Common(){
      return(
        <Box>
          <Typography gutterBottom>{type=='developer'?'Developers needed':'Designers needed'}</Typography>
            <Slider max={50} defaultValue={20} color='secondary'getAriaValueText={valuetext}
            step={2} valueLabelDisplay="auto"marks={marks}
          /> 
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" format="MM/dd/yyyy" margin="normal" color='primary'
            label="Start date of the project" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{'aria-label': 'change date' }}/>
            </MuiPickersUtilsProvider>
        </Box>
      )
    }
    function DesignerOptions(){
      return(
        <FormGroup>
          <Typography>Designer for</Typography>
          <FormControlLabel control={<Switch checked={webDesignCheck} onClick={handleWebDesignChange} name="web" />} label="Web Designing"/>
          <FormControlLabel control={<Switch checked={uiuxCheck} onClick={handleUIUXChange} name="uiux" />} label="UI/UX Designing"/> <br/>
          <Common/>
        </FormGroup>      
      )
    }
  return (
        <Box>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            <h1>Let us get to know you better!</h1> Are you looking for?
            <RadioGroup  onChange={handleChange} row>
              <FormControlLabel value="developer" labelPlacement='start'  control={<Radio />} label="Developer"  />
              <FormControlLabel value="designer" labelPlacement='start' control={<Radio />} label="Designer"  />
            </RadioGroup>
          </Box >
          <Box  margin={7} display="flex" flexDirection="row">
            <Box style={ {width: 300}}>
              {type!=''?<PersonalDetails/>:null}
            </Box >
            <Box style={ {width: 300}} margin={4} >
              {type!=''?(type=='developer'?<DeveloperOptions/>:<DesignerOptions/>):null}
            </Box>
            <Box style={ {width: 300}} margin={5}>
              {type!=''&&(end!=''||webDesignCheck||uiuxCheck)?<TimeProject/>:null}
            </Box>
          </Box> 
        </Box>
      )
  }

export default FormPage
