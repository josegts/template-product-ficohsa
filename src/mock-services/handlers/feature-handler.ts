import { http } from 'msw';

export const handlersFeature = [
  // Intercept the "GET /resource" request.
  http.get('/api/todos', () => {
    // And respond with a "text/plain" response
    // with a "Hello world!" text response body.
    return Response.json({
      data: {
        data: [
          { id: 1, title: 'John Doe mock' },
          { id: 2, title: 'Jane Doe mock' },
        ],
      },
    });
  }),
];
