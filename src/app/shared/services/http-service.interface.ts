export interface HttpService<T> {
  get();
  getById(id: number);
  post(object: T);
  put(object: T);
  delete(id: number);
}
