import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const secretApiKey = request.headers.get('x-api-key');

  if (secretApiKey !== process.env.SECRET_TOKEN) {
    return NextResponse.json(
      {
        error: 'Unauthorized',
        message: 'API-key is invalid or missing!'
      },
      {
        status: 401
      }
    );
  };  
};

export const config = {
  matcher: '/api/:path*',
};
