import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import Header from './header';
import InfoModal from './info-modal'

describe('<Header /> component', () => {
    it('Smoke test', () => {
        shallow(<Header />); 
    })

    it('Displays header tag', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.type()).toEqual('header')
    })

    it('renders with state as infomodal false', () => {
        const wrapper = shallow (<Header />)
        expect(wrapper.state('showInfoModal')).toEqual(false);
    })

    it ('changes the state of InfoModal to True when the function runs', () => {
        const wrapper = shallow(<Header />);
        wrapper.instance().toggleInfoModal();
        expect(wrapper.state('showInfoModal')).toEqual(true);
    })

    it ('displays the correct information when show InfoModal is set to true', () => {
        const wrapper = shallow(<Header />);
        return (
        new Promise ( function(resolve, reject) {wrapper.setState({showInfoModal: true}, resolve )})
        .then(() => {
            expect(wrapper.containsMatchingElement(<InfoModal />)).toEqual(true)
        }))
    })

    it ('displays the correct information when show InfoModal is set to true', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.containsMatchingElement(<InfoModal />)).toEqual(false)
    })
})