import { NextRequest, NextResponse } from "next/server";

interface JobApplication {
  name: string;
  age: number;
  phone: string;
  state: string;
  city: string;
};

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();

    if (!rawBody) {
      return NextResponse.json(
        {
          error: 'Bad Request',
          message: 'The request must include a non-empty body!'
        },
        {
          status: 400
        }
      );
    };

    const body: JobApplication = JSON.parse(rawBody);
    const { name, age, phone, state, city } = body;

    if (!name || !age || !phone || !state || !city) {
      return NextResponse.json(
        {
          error: 'Bad Request',
          message: 'The application must be sent with all the information!'
        },
        {
          status: 400
        }
      );
    };

    return NextResponse.json({
      message: `Thank you for your application, ${name}`
    });
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
