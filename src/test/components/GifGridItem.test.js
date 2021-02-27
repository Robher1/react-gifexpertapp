import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', ()=>{
    
    const title = 'Soy un test';
    const url = 'https://localhost/soyuntest.gif';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );
    
    test('debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe tener un parrafo', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe( title );
        
    });

    test('debe de obtener la imagen igual al url y alt de los props', async () => {

        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
            
    });

    test('debe de tener animate__fadeIn', async () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );
        
    });
    
});