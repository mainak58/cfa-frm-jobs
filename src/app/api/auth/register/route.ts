import { NextRequest, NextResponse } from "next/server";
import { nodeServerInstance } from "@/utils/axiosInstances";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await nodeServerInstance.post("/auth/register", body, {
      headers: { "Content-Type": "application/json" },
    });

    return NextResponse.json({
      success: true,
      data: response.data,
      message: "Registration successful",
    });
  } catch (error: any) {
    const message = error.response?.data?.message || "Registration failed";

    return NextResponse.json(
      { success: false, message },
      { status: error.response?.status || 500 }
    );
  }
}
