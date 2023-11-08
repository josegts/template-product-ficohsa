import { render, waitFor } from '@testing-library/react';
import Home from '../../src/pages/index';
import MainProvider from '@shared/utils/main-provider';
describe('Index page', () => {
  it('should render the index page', async () => {
    const { baseElement, findByText, debug } = render(<Home />, {
      wrapper: MainProvider,
    });
    expect(baseElement).toBeTruthy();
    const text = await findByText('John Doe mock');
    expect(text).toBeTruthy();
    await waitFor(async () => {
      debug();
    });
  });
});
