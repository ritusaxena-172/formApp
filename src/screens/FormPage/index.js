import React from 'react'
import Box from '@material-ui/core/Box';
import { Button, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import clsx from 'clsx';
import useStyles from './styles';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SelectTextField from '../components/SelectTextField'
import TextFields from '../components/TextField';
import RadioButton from '../components/RadioButton';
import FormControllabel from '../components/FormControllabel';
import {firestore} from '../../config/Firebase/firebase';
import 'firebase/firestore';
function FormPage() {
    const classes=useStyles();
    const [type, setType] = React.useState('');
    const [end, setEnd] = React.useState('');
    const [mobile, setMobile] = React.useState('');
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
                    
    const skills=[{skill:'React'},{skill:'Android Studio'},{skill:'Adobe'},{skill:'Flutter'},{skill:'React-native'},{skill:'Java'},{skill:'Swift'}]
    
    const valuetext=(value)=> {
        console.log('1')
          return {value};
        }
    const handleChange = (event) => {
      console.log('2')
      event.preventDefault()
        setType(event.target.value);
        setTime('')
        };
    const handleYearsChange = (event) => {
      console.log('3')
      event.preventDefault()
          setYears(event.target.value);
        };
    const handleTimeChange = (event) => {
      console.log('4')
      event.preventDefault()
          setTime(event.target.value);
        };
    const handleWebChange = () => {
      console.log('5')
          if(mobileCheck){
              setWebCheck(!webCheck)
              setMobileCheck(!mobileCheck)
          }
          else{
            setWebCheck(!webCheck)
          }
        };
    const handleMobileChange = () => {
      console.log('6')
            if(webCheck){
              setMobileCheck(!mobileCheck)
              setWebCheck(!webCheck)
            }
            else{
              setMobileCheck(!mobileCheck)
            }
        };
    const handleWebDesignChange = () => {
      console.log('7')
          if(uiuxCheck){
            setWebDesignCheck(!webDesignCheck)
            setuiuxCheck(!uiuxCheck)
          }
          else{
          setWebDesignCheck(!webDesignCheck)
          }
      };
    const handleUIUXChange = () => {
      console.log('8')
          if(webDesignCheck){
              setWebDesignCheck(!webDesignCheck)
              setuiuxCheck(!uiuxCheck)
          }
          else{
              setuiuxCheck(!uiuxCheck)
          }
      };
    const handleEndChange  = (event) => {
      console.log('9')
          console.log('clicked')
          console.log('end is',end)
          event.preventDefault();
          setEnd(event.target.value);
        };
        const handleMobChange  = (event) => {
          console.log('10')
          event.preventDefault()
          setMobile(event.target.value);
        };
    const handleDateChange = (date) => {
      console.log('11')
          setSelectedDate(date);
        };

        function StoreInFirebase(){
         firestore.collection('data').add({
            end:end
          });
        }
     function TextTypography(props) {
          return (
             <Typography variant='h5'>
                {props.text}
             </Typography>
          )
    } 
    function PersonalDetails(){
      return(
        <Paper elevation={3} className={clsx(classes.paper1)}>
          <Grid container direction={"column"} spacing={3} >
            <TextTypography text='Personal Details'/>
            <Grid item>
              <TextFields label='Name'/>
            </Grid>
            <Grid item>
              <TextFields label="Email"/>
            </Grid>
            <Grid item>
              <TextFields label="Organization"/>
            </Grid>
            <Grid item>
            <SelectTextField label="Select" value={years} onChange={handleYearsChange} 
            helperText="Please select your year of experience" array={experience}/>
            </Grid>
          </Grid>
          </Paper>
        );
    }

    function Options(){
      if(webCheck){
          return(
            <RadioGroup onChange={handleEndChange} >
              <RadioButton  value='front end' label='Front End'/>
              <RadioButton  value='back end' label='Back End'/>
              <RadioButton value='both' label='Both'/>
            </RadioGroup>
          );
      } 
      else if(mobileCheck){
          return(
            <RadioGroup  onChange={handleMobChange} >
              <RadioButton value='android' label='Android'/>
              <RadioButton value='ios' label='iOS'/>
              <RadioButton value='both' label='Both'/>
            </RadioGroup>
          );
      }
    }

    function TimeProject(){
      return(
        <Paper elevation={3} className={clsx(classes.paper3)}>
        <Grid container width={30} direction={"column"} spacing={3} >
        <TextTypography text='About the Project'/>
            <Grid item>
              <SelectTextField label="Select" value={time} onChange={handleTimeChange} helperText="Select the duration of project" array={times}/>
            </Grid>
            <Grid item>
              <Autocomplete multiple options={skills} getOptionLabel={(option) => option.skill} 
                renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Skills Required" placeholder="Add" /> )} />
            </Grid>
            <Grid item>
              {time!=''&&((end!=''||mobile!='')||(webDesignCheck||uiuxCheck))?<Button className={clsx(classes.button1)} variant="contained" color="primary" onClick={StoreInFirebase}>Save Data</Button>:null}
            </Grid>
        </Grid>
        </Paper>
      );
    }

    function DeveloperOptions(){
      return(  
        <Paper elevation={3} className={clsx(classes.paper2)}>
           <Grid container width={30} direction={"column"} spacing={2} >
           <TextTypography text='Developer for'/>
            {/* <FormGroup> */}
            <Grid item>
            <FormControllabel checked={webCheck} onClick={handleWebChange} label="Web Development"/>
              {webCheck&&!mobileCheck?<Options/>:null}
            </Grid>
            <Grid item>
            <FormControllabel checked={mobileCheck} onClick={handleMobileChange} label="Mobile Development"/>
              {!webCheck&&mobileCheck?<Options/>:null} <br/>
              </Grid>
              <Grid item>
              <Common/>
              </Grid>
          {/* </FormGroup>  */}
          </Grid>
       </Paper>
        );
    }

    function Common(){
      return(
        <Box>
          <Typography variant='h6'>{type=='developer'?'Developers needed':'Designers needed'}</Typography>
            <Slider max={50} defaultValue={20} color='secondary' getAriaValueText={valuetext}
            step={2} valueLabelDisplay="auto"marks={marks} className={clsx(classes.wide)}/>  
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker className={clsx(classes.wide)} disableToolbar variant="inline" format="MM/dd/yyyy" margin="normal" color='primary'
            label="Start date of the project" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{'aria-label': 'change date' }}/>
            </MuiPickersUtilsProvider>
        </Box>
      )
    }
    function DesignerOptions(){
      return(
        <Paper className={clsx(classes.paper2)}>
          <Grid container width={30} direction={"column"} spacing={3} >
          <TextTypography text='Designer for'/>
            <Grid item>
            <FormControllabel checked={webDesignCheck} onClick={handleWebDesignChange} label="Web Designing"/>
            </Grid>
            <Grid item>
            <FormControllabel checked={uiuxCheck} onClick={handleUIUXChange} label="UI/UX Designing"/>
            </Grid>
            <Grid item>
            <Common/>
            </Grid>
            </Grid>
        </Paper>    
      )
    }
  return (
        <Box>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            <h1>Let us get to know you better!</h1> 
            <TextTypography text='Are you looking for?'/>
            <RadioGroup  onChange={handleChange} row>
              <RadioButton value='developer'label='Developer'/>
              <RadioButton value='designer'label='Designer'/>
            </RadioGroup>
          </Box >
          <Box margin={4} display="flex" flexDirection="row">
              {type!=''?<PersonalDetails/>:null}
              {type!=''?(type=='developer'?<DeveloperOptions/>:<DesignerOptions/>):null}
              {type!=''&&((end!=''||mobile!='')||(webDesignCheck||uiuxCheck))?<TimeProject/>:null}
          </Box> 
        </Box>
      )
  }

export default FormPage
