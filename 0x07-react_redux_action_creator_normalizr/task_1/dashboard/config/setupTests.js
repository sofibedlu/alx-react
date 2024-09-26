import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { StyleSheetTestUtils } from 'aphrodite';

Enzyme.configure({ adapter: new Adapter() });

// a global setup file that runs before your tests, where you suppress Aphrodite’s style injection.
beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });