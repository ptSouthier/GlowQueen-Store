import { NextRequest, NextResponse } from "next/server";
import jobs from '@/public/data/jobs';

export async function GET(request: NextRequest) {  
  return NextResponse.json(jobs);
}