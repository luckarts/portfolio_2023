export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const POST = 'post';
export const GET = 'get';
export const DELETE = 'delete';
export const PUT = 'put';

export const StatusCodesList = {
  400: 'Bad Request: Invalid request parameters',
  401: 'Unauthorized: Authentication failed',
  409: 'Conflict: This already exists',
  200: 'Success',
  425: 'ValidationError',
  426: 'InternalServerError'
};
