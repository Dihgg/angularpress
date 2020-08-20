import { sanitizeHtml } from './utils';

describe('UTILS', () => {
  it('sanitize HTML', () => {
	const res = sanitizeHtml('<tag>test</tag>');
	expect(res).toBe('test');
  })
});
