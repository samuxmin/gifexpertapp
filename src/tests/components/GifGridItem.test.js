import React from 'react';
import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from 'enzyme';


describe("pruebas en GifGridItem", () =>{
    
    const title = 'Un titulo';
    const url = 'https://localhost/algo.gif'
    
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('should mostar gifgriditem correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('debe de tener un parrafo con el title', () =>{
        const p = wrapper.find('p');        
        expect(p.text().trim()).toBe(title) 
    })

    test('img debe tener un src y un titulo valido', () =>{
        const img = wrapper.find('img')
        expect( img.prop('src') ).toBe(url)
        expect( img.prop('alt') ).toBe(title)
    })

    test('div debe tener clase bounceIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        
        expect(className.includes('animate__bounceIn')).toBe(true)
    })
})