import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', ()=>{
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    // control de ciclo de vida
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });
    
    test('debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    /* test('debe de cambiar la caja de texto', async () => {
        const input = wrapper.find('input');
        const value = 'Hola paps';
        input.simulate('change', { target: { value } });
    }); */

    test('NO debe de postear la info onSubmit', async () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
        
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', async () => {

        const input = wrapper.find('input');
        const value = 'Hola paps';
        input.simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect(input.prop('value')).toBe('');

    });

});