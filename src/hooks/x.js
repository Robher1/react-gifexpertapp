

function elJona( x ){
    const area = x*2/3;
    return area;
}

const elAreaDeJona = ( x ) => {
    const area = x*2/3;
    return area;
};

// fórmula para el área lateral de superficie de un cilindro es L. S. A. = 2 π rh.
function areaCilindro( radio, altura ){
    const area = 2 * Math.PI * radio * altura;
    return area;
}

console.log( areaCilindro( 3, 9 ) + 'in²' );