import { useFetchGifts } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas con el hook useFetchGifs', ()=>{
    
    test('debe de retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifts('Hola mundo') );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();
        
    });

    test('debe de retorna un arreglo de img y el loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifts('Hola mundo') );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBeFalsy();
        
    })
    
    
});