import { NextRequest, NextResponse } from "next/server";
import jobs from '@/src/data/jobs';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const jobLevelSearchValue = searchParams.get('level');
    const validJobLevels = ['Junior', 'Senior'];

    if (jobLevelSearchValue && validJobLevels.includes(jobLevelSearchValue)) {      
      const filteredJobsByLevel = jobs.filter((job) => job.level === jobLevelSearchValue);
      
      if (!filteredJobsByLevel.length) {
        return NextResponse.json(
          {
            error: 'Not Found',
            message: 'Unable to find the searched job!'
          },
          {
            status: 404
          }
        );
      };

      return NextResponse.json(filteredJobsByLevel);
    };

    if (jobLevelSearchValue && !validJobLevels.includes(jobLevelSearchValue)) {
      return NextResponse.json(
        {
          error: 'Bad Request',
          message: 'Invalid search value!'
        },
        {
          status: 400
        }
      );
    };

    return NextResponse.json(jobs);
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
