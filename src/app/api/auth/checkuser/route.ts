import { nodeServerInstance } from "@/utils/axiosInstances";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await nodeServerInstance.post(
      "/auth/checkuser",
      JSON.stringify(body),
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      return NextResponse.json({
        success: true,
        message: response.data.message || "Phone number Or Email Problem",
      });
    } else {
      return NextResponse.json({
        success: true,
        message: response.data.message || "user does not exist",
      });
    }
  } catch (error: any) {
    const message =
      error.response?.data?.message || "Phone number Or Email Problem";

    return NextResponse.json(
      { success: false, message },
      { status: error.response?.status || 500 }
    );
  }
}
