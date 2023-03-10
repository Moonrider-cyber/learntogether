import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, FormLabel, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../redux/actions/courses';
import { useEffect,useState } from 'react';

function AddCourse() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch])
  
  const { category } = useSelector((state) => state.courses);

  
  const steps = ['Course Details 1', 'Course details 2'];
  const categorydata = category ? category : [];
  

  const myForm = React.useRef(null);

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
      if (!myForm.current.checkValidity()) {
        return;
     }
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
  
    const [ImgPrev, setImgPrev] = React.useState();
    const [Img , setImg] = React.useState();
    const [Title, setTitle] = useState('');
    const [Desc, setDesc] = useState('');
    const [Price, setPrice] = useState('');
    const [Categoryform, setCategoryform] = useState('');

    const submitbtnhandler = () => {}

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
              <form action="/admin/dashboard/course/addcourse" method="POST" ref={myForm}>
                  <React.Fragment>
                    {activeStep === 0 && (
                    <Container sx={{pt:7}}>
                      
                        <Box sx={{ mt: 2, mb: 1, py: 1, width:"100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
                            <FormLabel component="legend" sx={{width:"20%"}}>Course Name</FormLabel>
                            <TextField 
                              id="outlined-basic" 
                              label="Course Title"  
                              variant="outlined" 
                              required 
                              sx={{width:"50%"}}
                              value={Title ? Title : ""}
                              onChange={(e) => setTitle(e.target.value)}
                    
                              />
                        </Box>

                        <Box sx={{ mt: 2, mb: 1, py: 1, width:"100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
                            <FormLabel component="legend" sx={{width:"20%"}}>Course Description </FormLabel  >
                            <TextField
                                  id="outlined-multiline-static"
                                  label="Course Description"
                                  multiline
                                  rows={3}
                                  sx={{width:"50%"}}
                                  required
                                  value={Desc ? Desc : ""}
                                  onChange={(e) => setDesc(e.target.value)}
                    
                                />
                        </Box>
                        <Box sx={{ mt: 2, mb: 1, py: 1, width:"100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
                        <FormLabel component="legend" sx={{width:"20%"}}>Course Price </FormLabel>
                        <FormControl  sx={{width:"50%"}}>
                              {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
                              <TextField
                                id="outlined-adornment-amount"
                                // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                InputProps={{ inputProps: { min: 1 } }}
                                label="Price"
                                type={'number'}
                               required
                                value={Price ? Price : ""}
                                onChange={(e) => setPrice(e.target.value)}
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
                                <Select
                                      id='category'
                                      label="Select Catagory"
                                      name="category"
                                      sx={{width:"50%"}}
                                      required
                                      defaultValue="choose"
                                      value={Categoryform ? Categoryform : 'choose'}
                                      onChange={(e) => setCategoryform(e.target.value)}
                                    >
                                      <MenuItem disabled value="choose">Choose Option</MenuItem>
                                      {
                                      categorydata ?
                                      categorydata.map((option,index) => (
                                        <MenuItem key={index} value={option._id}>
                                          {option.name} 
                                        </MenuItem>
                                      ))
                                    : null}
                                </Select>
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
                            <Box sx={{textAlign:"center",pt:2}}>
                              <Typography variant='p' sx={{fontSize:15,color:"gray"}} >You Can Add Lecture After Course Was Created </Typography>
                            </Box>
                        </Container>
                     </>   
                    )}
                    {/* {activeStep === 1 && (
                     <>
                     
                     </>
                    )} */}
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
                        { activeStep != steps.length ? (
                          activeStep === steps.length - 1 ? (
                            <>
                            <Button onClick={submitbtnhandler} type={"submit"}>
                             Add Course
                            </Button>  
                            </>
                          ) : 
                          (
                          <Button onClick={handleComplete} type={"submit"}>
                             Complete Step
                        </Button>
                        )
                        ) : null}
                    </Box>
                  </React.Fragment>
                {/* )} */}
              </form>
            </Box>
      </Container>
      </>
    );
}

export default AddCourse;
