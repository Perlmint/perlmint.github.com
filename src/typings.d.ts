/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface AsyncIterator<T> {
  next(value?: any): Promise<IteratorResult<T>>;
  return?(value?: any): Promise<IteratorResult<T>>;
  throw?(e?: any): Promise<IteratorResult<T>>;
}