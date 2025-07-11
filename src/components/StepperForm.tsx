import React, { useState } from 'react'
import Stepper, { Step } from '@/components/ui-components/Stepper'
import { Autocomplete, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify'
const StepperForm = () => {
  const [selectedJobs, setSelectedJobs] = useState<{ title: string }[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>(["Remote"]);
  const [selecteexp, setSelecteexp] = useState<string>("");
  const [email,Setemail] = useState<string>("");
  const [selectTime, setselectTime] = useState<string>("");
  const [selectampm, setselectampm] = useState<string>("");
  const [selectNumberofJobs, setselectNumberofJobs] = useState<string>("");
  const [selectJobType, setselectJobType] = useState<string>("");
  const [openloader, Setopenloader] = useState(false);

// step1 checker 
  const step1checker = ()=>{
    if (selectedJobs.length === 0) {
      toast.error("Please select at least one job title.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return false;
    }
    if (selectedLocation.length === 0) {
      toast.error("Please select at least one job location.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return false;
    }
    if (selecteexp === "") {
      toast.error("Please select your experience level.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return false;
    }
    if (selectJobType === "") {
      toast.error("Please select your job type.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return false;
    }
    return true;
  }

// Step2 checker
  const step2checker = () => {
    if (email.trim() === "") {
      toast.error("Please enter your email.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return false;
    }
    if (selectTime === "") {
      toast.error("Please select a time.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return false;
    }
    if (selectampm === "") {
      toast.error("Please select AM/PM.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return false;
    }
    if (selectNumberofJobs === "") {
      toast.error("Please select the number of jobs.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return false;
    }
    return true;
  } 

// Submiting the form
const handleSubmit = async()=> {
  try {
    Setopenloader(true);
    console.log("Form submitted with data:", {
      selectedJobs,
      selectedLocation,
      selecteexp,
      email,
      selectTime,
      selectampm,
      selectNumberofJobs
    });
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={openloader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <Stepper step1checker = {step1checker} step2checker={step2checker}   initialStep={1} onStepChange={(step) => {console.log(step); }} onFinalStepCompleted={handleSubmit} backButtonText="Previous" nextButtonText="Next">
          <Step> 
            <div className="flex flex-col gap-[3rem]">
              <Autocomplete
                className='!font-bold'
                multiple
                id="job-title-selector"
                options={jobTitles}
                getOptionLabel={(option) => option.title}
                onChange={(event, newValue) => {
                  if (newValue.length <= 3) {
                    setSelectedJobs(newValue);
                  }
                }}
                value={selectedJobs}
                renderInput={(params) => (
                  <TextField
                    sx={
                      {
                      '& .MuiChip-label':{
                        fontSize: '1.1rem',
                      },
                      '& .MuiFormLabel-root':{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color:"black"
                      }
                      }
                    }
                     className='!font-bold'
                    {...params}
                    variant="standard"
                    label="Select up to 3 Job Titles"
                    placeholder="e.g. Frontend Developer"
                    required={true}
                  />
                )}
                filterSelectedOptions
                disableCloseOnSelect
              />
              <Autocomplete
                multiple
                id="job-location-selector"
                options={jobLocations}
                getOptionLabel={(option) => option}
                onChange={(event, newValue) => {
                  if (newValue.length <= 4) {
                    setSelectedLocation(newValue);
                  }
                }}
                value={selectedLocation}
                defaultValue={["Remote"]}              
                renderInput={(params) => (
                  <TextField
                  sx={
                    {
                     '& .MuiChip-label':{
                      fontSize: '1.1rem',
                     },
                     '& .MuiFormLabel-root':{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color:"black"
                    }
                    }
                  }
                    {...params}
                    variant="standard"
                    label="Job Location"
                    placeholder="e.g. Bengaluru or Remote"
                    required={true}
                  />
                )}
              />
              <div className='flex w-full justify-between' >
                <Autocomplete
                className='!w-[45%] '
                  sx={
                    {
                    '& .MuiInputBase-input':{
                      fontSize: '1.1rem',
                    },
                    '& .MuiFormLabel-root':{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color:"black"
                    }
                    }
                  }
                  id="exp-selector"
                  options={expoption}
                  getOptionLabel={(option) => option}
                  onChange={(event, newValue) => {
                    setSelecteexp(newValue || "");
                  }}
                  value={selecteexp}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Experience Level"
                      placeholder="Select your experience level"
                      required={true}
                    />
                  )}
                />
                <Autocomplete
                className='!w-[45%] '
                  sx={
                    {
                    '& .MuiInputBase-input':{
                      fontSize: '1.1rem',
                    },
                    '& .MuiFormLabel-root':{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color:"black"
                    }
                    }
                  }
                  id="jobtype-selector"
                  options={jobtypeoption}
                  getOptionLabel={(option) => option}
                  onChange={(event, newValue) => {
                    setselectJobType(newValue || "");
                  }}
                  value={selectJobType}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Job Type"
                      placeholder="Select your job type"
                      required={true}
                    />
                  )}
                />
              </div>
            </div>
          </Step>
          <Step> 
            <div className='flex flex-col gap-[3rem] ' >
              <input className=' outline-none border-b-[1px] border-gray-500 font-semibold text-[1.3rem] bg-white ' value={email} onChange={(e)=>Setemail(e.target.value)}  type="email"  placeholder="Enter your email"   />
              <div className='flex w-full justify-between ' >
                <Autocomplete
                  className='!w-[45%] '
                  sx={
                    {
                    '& .MuiInputBase-input':{
                      fontSize: '1.1rem',
                    },
                    '& .MuiFormLabel-root':{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color:"black"
                    }
                    }
                  }
                  id="time-selector1"
                  options={timeoption}
                  getOptionLabel={(option) => option}
                  onChange={(event, newValue) => {
                    setselectTime(newValue || "");
                  }}
                  value={selectTime}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Preferred Hour"
                      placeholder="e.g. 10"                      
                      required={true}
                    />
                  )}
                />
                <Autocomplete
                  className='!w-[45%] '
                  sx={
                    {
                    '& .MuiInputBase-input':{
                      fontSize: '1.1rem',
                    },
                    '& .MuiFormLabel-root':{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color:"black"
                    }
                    }
                  }
                  id="ampm-selector1"
                  options={ampmoption}
                  getOptionLabel={(option) => option}
                  onChange={(event, newValue) => {
                    setselectampm(newValue || "");
                  }}
                  value={selectampm}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="AM or PM"
                      placeholder="Choose AM or PM"                      
                      required={true}
                    />
                  )}
                />
              </div>
              <Autocomplete
              sx={
                {
                '& .MuiInputBase-input':{
                  fontSize: '1.1rem',
                },
                '& .MuiFormLabel-root':{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color:"black"
                }
                }
              }
                  id="numberofjobs-selector"
                  options={numberofjobsoption}
                  getOptionLabel={(option) => option}
                  onChange={(event, newValue) => {
                    setselectNumberofJobs(newValue || "");
                  }}
                  value={selectNumberofJobs}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                     label="Jobs Per Day"
                     placeholder="e.g. 5"
                      required={true}
                    />
                  )}
                />
            </div>
          </Step>
          <Step> 
          <div className="p-4 rounded-xl bg-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl font-bold">📝 Review Your Job Alert</h2>
            <div className='flex justify-between flex-wrap  ' >
              <div className='w-[45%]' >
                <p className='font-bold text-black ' >📌 Job Titles:</p>
                <ul >
                  {selectedJobs.map(job => <li className='font-semibold text-blue-500 text-[1.2rem] '  key={job.title}><span className='text-black' > • </span>{job.title}</li>)}
                </ul>
              </div>
              <div  className='w-[45%]'>
                <p className='font-bold text-black ' >📍 Preferred Locations:</p>
                <ul>
                  {selectedLocation.map(loc => <li className='font-semibold text-blue-500 text-[1.2rem] '  key={loc}><span className='text-black' > • </span>{loc}</li>)}
                </ul>
              </div>
            </div>
            <div className='flex justify-between flex-wrap  '>
              <div className='w-[45%] flex flex-col gap-[1rem] ' >
                    <p className='font-semibold text-blue-500 text-[1.2rem] ' ><span className='font-bold text-black ' >💼 Experience:</span> {selecteexp}</p>
                    <p className='font-semibold text-blue-500 text-[1.2rem] ' ><span className='font-bold text-black ' >📧 Email:</span> {email}</p>
                    <p className='font-semibold text-blue-500 text-[1.2rem] ' ><span className='font-bold text-black ' >👨‍💻 Job type:</span> {selectJobType}</p>
              </div>
              <div className='w-[45%] flex flex-col gap-[1rem]' >
                    <p className='font-semibold text-blue-500 text-[1.2rem] ' ><span className='font-bold text-black ' >🕒 Preferred Time:</span> Daily {selectTime}:00 {selectampm}</p>
                    <p className='font-semibold text-blue-500 text-[1.2rem] ' ><span className='font-bold text-black ' >📋 Jobs Per Day:</span> {selectNumberofJobs}</p>
                   
              </div>
            </div>
          </div>
          </Step>
        </Stepper>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  )
}

export default StepperForm


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const jobTitles = [
  { title: "Frontend Developer" },
  { title: "Backend Developer" },
  { title: "Full Stack Developer" },
  { title: "React Developer" },
  { title: "Node.js Developer" },
  { title: "Software Engineer" },
  { title: "Web Developer" },
  { title: "UI/UX Designer" },
  { title: "Data Analyst" },
  { title: "Data Scientist" },
  { title: "Machine Learning Engineer" },
  { title: "Android Developer" },
  { title: "iOS Developer" },
  { title: "DevOps Engineer" },
  { title: "QA Engineer" },
  { title: "Manual Tester" },
  { title: "Automation Tester" },
  { title: "Python Developer" },
  { title: "Java Developer" },
  { title: "C++ Developer" },
  { title: "Flutter Developer" },
  { title: "Cloud Engineer" },
  { title: "Cybersecurity Analyst" },
  { title: "Database Administrator" },
  { title: "Game Developer" },
  { title: "Blockchain Developer" },
  { title: "Technical Support Engineer" },
  { title: "Business Analyst" },
  { title: "Product Manager" },
  { title: "Digital Marketing Executive" },
  { title: "Content Writer" },
  { title: "Graphic Designer" },
];
const jobLocations = [
  "Remote",
  "Bengaluru",
  "Delhi",
  "Mumbai",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Noida",
  "Gurgaon",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Indore",
  "Surat",
  "Nagpur",
  "Bhopal",
  "Lucknow",
  "Patna",
  "Chandigarh",
  "Coimbatore",
  "Visakhapatnam",
  "Vadodara",
  "Thiruvananthapuram",
  "Kanpur",
  "Raipur",
  "Ranchi",
  "Bhubaneswar",
  "Dehradun",
  "Mysuru",
  "Varanasi",
  "Jodhpur",
  "Guwahati",
  "Amritsar",
  "Ludhiana",
  "Agra",
  "Madurai",
  "Jabalpur",
  "Nashik",
  "Aurangabad"
];
const expoption =[
  'Fresher',
  '1 Year',
  '2 Years',
  '3 Years',
  '4 Years',
  '5 Years',
  '6 Years',
  '7 Years',
  '8 Years',
  '9 Years',
  '10 Years',
]

const timeoption =[
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
]
const ampmoption= [
  "AM",
  "PM"
]
const numberofjobsoption = [
  "1",
  "2",
  "3",
  "4",
  "5",
]
const jobtypeoption = [
  "Full-time",
  "Internship",
]