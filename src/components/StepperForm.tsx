import React, { useState } from 'react'
import Stepper, { Step } from '@/components/ui-components/Stepper'
import { Autocomplete, TextField } from '@mui/material';
const StepperForm = () => {
  const [selectedJobs, setSelectedJobs] = useState<{ title: string }[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>(["Remote"]);
  const [selecteexp, setSelecteexp] = useState<string>("");
  const [email,Setemail] = useState<string>("");
  const [selectTime, setselectTime] = useState<string>("");
  const [selectampm, setselectampm] = useState<string>("");
  const [selectNumberofJobs, setselectNumberofJobs] = useState<string>("");

// step1 checker 
  const step1checker = ()=>{
    if (selectedJobs.length === 0) {
      alert("Please select at least one job title.");
      return false;
    }
    if (selectedLocation.length === 0) {
      alert("Please select at least one job location.");
      return false;
    }
    if (selecteexp === "") {
      alert("Please select your experience level.");
      return false;
    }
    return true;
  }

// Step2 checker
  const step2checker = () => {
    if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
    }
    if (selectTime === "") {
      alert("Please select a time.");
      return false;
    }
    if (selectampm === "") {
      alert("Please select AM/PM.");
      return false;
    }
    if (selectNumberofJobs === "") {
      alert("Please select the number of jobs.");
      return false;
    }
    return true;
  } 


  return (
    <>
        <Stepper step1checker = {step1checker} step2checker={step2checker}   initialStep={1} onStepChange={(step) => {console.log(step); }} onFinalStepCompleted={() => console.log("All steps completed!")} backButtonText="Previous" nextButtonText="Next">
          <Step> 
            <div className="flex flex-col gap-6">
              <Autocomplete
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
                    {...params}
                    variant="standard"
                    label="Job Location"
                    placeholder="e.g. Bengaluru or Remote"
                    required={true}
                  />
                )}
              />
              <Autocomplete
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
            </div>
          </Step>
          <Step> 
            <div className='flex flex-col gap-[1rem] ' >
              <input className='' value={email} onChange={(e)=>Setemail(e.target.value)}  type="text" placeholder='Enter the email id'  />
              <div className='flex w-full justify-between ' >
                <Autocomplete
                  className='!w-[40%] '
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
                      label="please select the time"
                      placeholder="Select the time"
                      required={true}
                    />
                  )}
                />
                <Autocomplete
                  className='!w-[40%] '
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
                      label="Select Am/PM "
                      placeholder="Select Am/PM"
                      required={true}
                    />
                  )}
                />
              </div>
              <Autocomplete
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
                      label="select the number of jobs"
                      placeholder="select the number of jobs"
                      required={true}
                    />
                  )}
                />
            </div>
          </Step>
          <Step> 
            <h2>Welcome to the React Bits stepper!</h2>
            <p>Check out the next step!</p>
          </Step>
        </Stepper>
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