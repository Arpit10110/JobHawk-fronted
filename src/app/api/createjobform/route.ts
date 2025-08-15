import SavedAlert from "@/model/SavedAlert_model";
import { NextResponse } from "next/server";

interface JobItem {
  title: string;
}

interface JobFormRequest {
  selectedJobs: JobItem[];
  selectedLocation: string;
  selecteexp: string;
  email: string;
  selectTime: string;
  selectampm: string;
  selectNumberofJobs: number;
  selectJobType: string;
  status: string;
  plantype: string;
}

export const submitjobform = async (req: Request) => {
  try {
    const {
      selectedJobs,
      selectedLocation,
      selecteexp,
      email,
      selectTime,
      selectampm,
      selectNumberofJobs,
      selectJobType,
      status,
      plantype
    }: JobFormRequest = await req.json();

    const jobcretaedat = new Date();
    const jobexpiry = new Date(jobcretaedat);
    jobexpiry.setDate(jobexpiry.getDate() + 30);

    console.log("Job created at:", jobcretaedat);
    console.log("Job expiry date:", jobexpiry);

    const jobtitle: string[] = selectedJobs.map((item) => item.title);

    await SavedAlert.create({
      jobtitle: jobtitle,
      joblocation: selectedLocation,
      exp: selecteexp,
      email: email,
      hrtime: selectTime,
      ampm: selectampm,
      jobnumber: selectNumberofJobs,
      jobtype: selectJobType,
      createdAt: jobcretaedat,
      expiryDate: jobexpiry,
      lastSentAt: null,
      status: status,
      plantype: plantype
    });

    return NextResponse.json({
      success: true,
      message: "Job form created successfully"
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error in creating job form",
      error: error
    });
  }
};
