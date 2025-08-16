import SavedAlert from "@/model/SavedAlert_model";
import { NextResponse } from "next/server";
import { PlanModel } from "@/model/planmodel";
import { UserModel } from "@/model/usermode";
import { connectDB } from "@/db/dbconnect"; 
import { getuser } from "@/lib/getuser"; 

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
    }: JobFormRequest = await req.json();

    const user = await getuser();
    if(user == null){
      return NextResponse.json({
        success: false,
        message: "User not authenticated"
      })
    }

    await connectDB();
    const user_data = await UserModel.findOne({email:user.user?.email})
    const plan_data = await PlanModel.findOne({plan_user_id:user_data._id});
    if (!user_data || !plan_data) {
      return NextResponse.json({
        success: false,
        message: "User or plan not found"
      });
    }

    if(!selectedJobs || selectedJobs.length === 0 || !selectedLocation || !selecteexp || !email || !selectTime || !selectNumberofJobs || !selectJobType){
      return NextResponse.json({
        success: false,
        message: "Please fill all the required fields"
      });
    }

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
      planstartdate: plan_data.plan_start_date,
      planexpiryDate: plan_data.plan_end_date,
      lastSentAt: null,
      status: plan_data.plan_status,
      plantype: plan_data.plan_name,
      user_id: user_data._id,
      plan_id:plan_data._id
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

