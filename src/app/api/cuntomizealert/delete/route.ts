import { NextResponse } from "next/server";
import { connectDB } from "@/db/dbconnect";
import { getuser } from "@/lib/getuser";
import SavedAlert from "@/model/SavedAlert_model";

export const POST = async (req: Request) => {
    try {
        const { alertid } = await req.json();
        const user = await getuser();
        if (user == null) {
            return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
        }
        if(!alertid){
            return NextResponse.json({ error: "Alert ID is required" }, { status: 400 });
        }
        await connectDB();
        const savedalert = await SavedAlert.findOne({ _id: alertid });
        if (!savedalert) {
            return NextResponse.json({ error: "Alert not found" }, { status: 404 });
        }
        await SavedAlert.deleteOne({ _id: alertid });
        return NextResponse.json({ success: true, message: "Alert deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}