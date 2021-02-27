import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifts } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); // infigir llamadas

describe('Pruebas en <GifGrid />', ()=>{
    
    const category = 'mangos';
    
    test('debe de mostrar el componente correctamente', () => {

        useFetchGifts.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', async () => {

        const gifs = [{
            id: 'ABC',
            title: 'cosa',
            url: 'https://fake.jpg'
        },{
            id: '123',
            title: 'cosa',
            url: 'https://fake.jpg'
        }];

        useFetchGifts.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
    });
    

});