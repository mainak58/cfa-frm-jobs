import { nodeServerInstance } from "@/utils/axiosInstances";
import { NextResponse } from "next/server";

export default async function POST(res: NextResponse) {
  const body = await res.json();
  try {
    const res = await nodeServerInstance.post("/auth/verifytoken", body);
  } catch (error) {}
}
