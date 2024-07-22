import '@testing-library/jest-dom';
import {
  render,
  screen,
} from '@testing-library/react';

import Header from '../header';
 
describe('Header', () => {
  it('Renders component', async () => {
    render(<Header />);

    expect(await screen.getByTestId('header')).toBeVisible();
   });

   it('Logo is visible', async () => {
    render(<Header />);

    expect(await screen.findByText('taranitup.com')).toBeVisible();
   });

   it('Navigation is visible', async () => {
    render(<Header />);

    expect(await screen.getByTestId('navigation')).toBeVisible();
   });

   it('Navigation has correct links', async () => {
    render(<Header />);

    const links = screen.queryAllByRole('link');

    const linkArray = Array.from(links);

    expect(linkArray).toHaveLength(6);
    expect(linkArray[0]).toHaveTextContent('taranitup.com');
    expect(linkArray[1]).toHaveTextContent('about');
    expect(linkArray[2]).toHaveTextContent('AWS');
    expect(linkArray[3]).toHaveTextContent('Next.js');
    expect(linkArray[4]).toHaveTextContent('Cloudinary');
    expect(linkArray[5]).toHaveTextContent('Contentful');
   });
})
