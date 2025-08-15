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

export const POST = async (req: Request) => {
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

    const jobCreatedAt = new Date();
    const jobExpiry = new Date(jobCreatedAt);
    jobExpiry.setDate(jobExpiry.getDate() + 30);

    console.log("Job created at:", jobCreatedAt);
    console.log("Job expiry date:", jobExpiry);

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
      createdAt: jobCreatedAt,
      expiryDate: jobExpiry,
      lastSentAt: null,
      status: status,
      plantype: plantype
    });

    return NextResponse.json(
      {
        success: true,
        message: "Job form created successfully"
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Error in creating job form",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
};

