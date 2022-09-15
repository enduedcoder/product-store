const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });
