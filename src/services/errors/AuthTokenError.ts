export class AuthTokenError extends Error {
  constructor() {
    super('Error wth authentication token');
    
  }
}