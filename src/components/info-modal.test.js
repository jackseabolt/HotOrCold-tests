import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import InfoModal from './info-modal'; 

describe('<InfoModal /> component', () => {
    it('Smoke test', () => {
        shallow(<InfoModal/>); 
    })
})