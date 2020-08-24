import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('do not transform', () => {
    const pipe = new TruncatePipe();
    const truncated = pipe.transform('one two three', 3);
    expect(truncated).toBe('one two three');
  });

  it('transform', () => {
    const pipe = new TruncatePipe();
    const truncated = pipe.transform('one two three', 2);
    expect(truncated).toBe('one two...');
  });

  it('empty transform', () => {
    const pipe = new TruncatePipe();
    const truncated = pipe.transform('', 2);
    expect(truncated).toBe('');
  });

  it('null transform', () => {
    const pipe = new TruncatePipe();
    const truncated = pipe.transform('do not truncate', null);
    expect(truncated).toBe('do not truncate');
  });

  it('zero transform', () => {
    const pipe = new TruncatePipe();
    const truncated = pipe.transform('not show anything', 0);
    expect(truncated).toBe('');
  });
});
