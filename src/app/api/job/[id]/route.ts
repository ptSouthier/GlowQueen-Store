import { NextRequest, NextResponse } from "next/server";
import stringHasOnlyNumbers from "@/src/utils/stringHasOnlyNumbers";
import jobs from '@/public/data/jobs';

export async function GET(_request: NextRequest, context: { params: { id: string } }) {
  try {
    const idParam = context.params.id;

    if (!stringHasOnlyNumbers(idParam)) {
      return NextResponse.json(
        {
          error: 'Bad Request',
          message: 'The ID parameter must be a number!'
        },
        {
          status: 400
        }
      );
    };

    const jobResult = jobs.find((job) => job.id === parseInt(idParam));

    if (!jobResult) {
      return NextResponse.json(
        {
          error: 'Not Found',
          message: `Unable to find the job with ID: ${ idParam }`
        },
        {
          status: 404
        }
      );
    }

    return NextResponse.json(jobResult);
  } catch (error) {
    console.error('Internal Server Error: ', error);

    return NextResponse.json(
      {
        error: 'Internal Server Error',
        message: 'Something went wrong on the server!'
      },
      {
        status: 500
      }
    );
  };
};
