import React from 'react';
import { shallow } from 'enzyme';
import { GitExpertApp } from '../GitExpertApp';

describe('Pruebas en <GitExpertApp />', ()=>{
    
    test('debe de mostrar el componente correctamente', () => {

        const wrapper = shallow( <GitExpertApp /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias', async () => {

        const categories = ['mangos', 'sandia'];

        const wrapper = shallow( <GitExpertApp defaultCategories={ categories } /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });

});
