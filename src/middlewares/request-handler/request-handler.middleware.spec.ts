import { RequestHandlerMiddleware } from './request-handler.middleware';

describe('RequestHandlerMiddleware', () => {
  it('should be defined', () => {
    expect(new RequestHandlerMiddleware()).toBeDefined();
  });
});
