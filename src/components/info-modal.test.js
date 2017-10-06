import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import InfoModal from './info-modal'; 

describe('<InfoModal /> component', () => {
    it('Smoke test', () => {
        shallow(<InfoModal/>); 
    })

    it ('Renders a div', () => {
        const wrapper = shallow(<InfoModal />);
        expect(wrapper.type()).toEqual("div")
    })

    it('Displays class name overlay', () => {
        const wrapper = shallow(<InfoModal />); 
        expect(wrapper.hasClass('overlay')).toEqual(true); 
    });

    it('Runs onClose with props being passed through', () => {
        const callback = jest.fn();
        const prevDef= {preventDefault: function(){}} 
        const wrapper = shallow(<InfoModal onClose={callback}/>); 
        wrapper.find('a[className="close"]').simulate('click', prevDef);
        expect(callback).toHaveBeenCalled();
     })

})