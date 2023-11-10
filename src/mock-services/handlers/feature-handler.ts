import { http } from 'msw';

export const handlersFeature = [
  // Intercept the "GET /resource" request.
  http.get('/api/todos', () => {
    // And respond with a "text/plain" response
    // with a "Hello world!" text response body.
    return Response.json(
      {
        data: [
          { id: 1, name: 'John Doe mock' },
          { id: 2, name: 'Jane Doe mock' },
        ],
      },
      {
        status: 200,
      }
    );
  }),
];
