import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, FormLabel, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material';
import { FormControl } from '@mui/material';
const steps = ['Course Details', 'Create an ad group', 'Create an ad'];
const catagorydata = [
    {
      value: 'Web Development',
      label: 'Web Development',
    },
    {
      value: 'Mobile Development',
      label: 'Mobile Development',
    },
    {
      value: 'Data Science',
      label: 'Data Science',
    },
    {
      value: 'Artificial Intelligence',
      label: 'Artificial Intelligence',
    },
  ];



function AddCourse() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
  
    const totalSteps = () => {
      return steps.length;
    };
  
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
  
    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };
  
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };
  
    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStep = (step) => () => {
      setActiveStep(step);
    };
  
    const handleComplete = () => {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    };
  
    const handleReset = () => {
      setActiveStep(0);
      setCompleted({});
    };
    const [ImgPrev, setImgPrev] = React.useState();
  const [Img , setImg] = React.useState();

  function changeimgHandler(e){
    
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgPrev(reader.result);
      setImg(file);
    }
  } 
    return (
        
        <>
        <Box>
            <Typography variant="h3" sx={{ width:"100%",textAlign:"center",fontWeight:"bold",mt: 2, mb: 1, py: 3 }}>Add Course </Typography>
        </Box>
        <Container>
            <Box sx={{ width: '100%',display:"flex",justifyContent:"center",flexDirection:"column" }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
              <div>
                {allStepsCompleted() ? (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {activeStep === 0 && (
                    <Container sx={{pt:7}}>

                        <Box sx={{ mt: 2, mb: 1, py: 1, width:"100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
                            <FormLabel component="legend" sx={{width:"20%"}}>Course Name</FormLabel>
                            <TextField id="outlined-basic" label="Course Title" variant="outlined" required sx={{width:"50%"}} />
                        </Box>

                        <Box sx={{ mt: 2, mb: 1, py: 1, width:"100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
                            <FormLabel component="legend" sx={{width:"20%"}}>Course Description </FormLabel>
                            <TextField
                                  id="outlined-multiline-static"
                                  label="Course Description"
                                  multiline
                                  rows={3}
                                  sx={{width:"50%"}}
                                  required
                                />
                        </Box>
                        <Box sx={{ mt: 2, mb: 1, py: 1, width:"100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
                        <FormLabel component="legend" sx={{width:"20%"}}>Course Price </FormLabel>
                        <FormControl  sx={{width:"50%"}}>
                              <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                              <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Price"
                               required
                              />
                        </FormControl> 
                        </Box>
                    </Container>
                    )}
                    {activeStep === 1 && (
                     <>
                        <Container sx={{pt:7}}>

                            <Box sx={{ mt: 2, mb: 1, py: 1, width:"100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
                                <FormLabel component="legend" sx={{width:"20%"}}>Course Catagory</FormLabel>
                                <TextField
                                      select
                                      label="Select Catagory"
                                      sx={{width:"50%"}}
                                      required
                                    >
                                      {catagorydata.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                        </MenuItem>
                                      ))}
                                </TextField>
                            </Box>
                            <Box sx={{ mt: 2, mb: 1, py: 1, width:"100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
                            <FormLabel component="legend" sx={{width:"20%"}}>Course Thumbnail</FormLabel>
                                <div className="form-inputs file-inputs" style={{width:"50%"}}>
                                    <input 
                                      className="form-control file-input" 
                                      type="file" 
                                      name="file"
                                      id="formFile"
                                      accept="image/jpg, image/png, image/jpeg"
                                      onChange={changeimgHandler}
                                      required
                                      style={{width:"50%!important"}}
                                    />
                                </div>
                        </Box>
                            
                        </Container>
                     </>   
                    )}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleNext} sx={{ mr: 1 }}>
                        Next
                      </Button>
                      {activeStep !== steps.length &&
                        (completed[activeStep] ? (
                          <Typography variant="caption" sx={{ display: 'inline-block' }}>
                            Step {activeStep + 1} already completed
                          </Typography>
                        ) : (
                          <Button onClick={handleComplete}>
                            {completedSteps() === totalSteps() - 1
                              ? 'Finish'
                              : 'Complete Step'}
                          </Button>
                        ))}
                    </Box>
                  </React.Fragment>
                )}
              </div>
            </Box>
      </Container>
      </>
    );
}

export default AddCourse;
