//Square

function perimeterSquare(sizeSquare){
    return sizeSquare*4;
};

function squarePerimeterClick(){
    let inputSizeSquare = document.getElementById("square_side");
    let valueSizeSquare = inputSizeSquare.value;
    let SizeSquarePerimeter = perimeterSquare(valueSizeSquare);
    const resultSizeSquare = document.getElementById("geometric_calculators_container_result_square");
    resultSizeSquare.innerText = `El perímetro del Cuadrado es de ${SizeSquarePerimeter} cm`;
    }

function areaSquare(sizeSquare){
    return sizeSquare*sizeSquare;
}

function squareAreaClick(){

    let inputSizeSquare = document.getElementById("square_side");
    let valueSizeSquare = inputSizeSquare.value;
    let sizeSquareArea = areaSquare(valueSizeSquare);
    const resultSizeSquare = document.getElementById("geometric_calculators_container_result_square");
    resultSizeSquare.innerText = `El área del Cuadrado es de ${sizeSquareArea} cm`;
}

//Triangle

function perimeterTriangle(size1, size2, base){
    return size1 + size2 + base;
};

function trianglePerimeterClick(){
    let inputSizeTriangle1 = document.getElementById("triangle_side1");
    let sizeTriangle1 = inputSizeTriangle1.value;
    let inputSizeTriangle2 = document.getElementById("triangle_side2");
    let sizeTriangle2 = inputSizeTriangle2.value;
    let inputBaseTriangle3 = document.getElementById("triangle_side3");
    let sizeBaseTriangle = inputBaseTriangle3.value;
    let sizeTrianglePerimeter = perimeterTriangle(sizeTriangle1, sizeTriangle2, sizeBaseTriangle);
    const resultPerimeterTriangle = document.getElementById("geometric_calculators_container_result_triangle");
    resultPerimeterTriangle.innerText = `El perímetro del Triánguo es de ${sizeTrianglePerimeter} cm`
}

function areaTriangle(height, base){
    return (base*height)/2;
};

function triangleAreaClick(){
    let inputBaseTriangle = document.getElementById("triangle_side3");
    let sizeBaseTriangle = inputBaseTriangle.value;
    let inputHeightTriangle = document.getElementById("triangle_side4");
    let sizeHeightTriangle = inputHeightTriangle.value;
    let sizeAreaTriangle = areaTriangle(sizeBaseTriangle, sizeHeightTriangle);
    const resultAreaTriangle = document.getElementById("geometric_calculators_container_result_triangle");
    resultAreaTriangle.innerText = `El área del Triánguo es de ${sizeAreaTriangle} cm`
}

//Circle

const numberPI = Math.PI;

function perimeterCircle(diameter, numberPI){
    return diameter*numberPI;
};

function circlePerimeterClick(){
    let inputDiameterCircle = document.getElementById("circle_diameter");
    let sizeDiameterCircle = inputDiameterCircle.value;
    let sizePerimeterCircle = perimeterCircle(sizeDiameterCircle, numberPI); 
    const resultPerimeterCircle = document.getElementById("geometric_calculators_container_result_circle");
    resultPerimeterCircle.innerText = `El Perímetro del Círculo es de ${sizePerimeterCircle} cm`
}

function areaCircle(diameter, numberPI){
    radius = diameter/2;
    return (radius * radius) * numberPI;
}

function circleAreaClick(){
    let inputDiameterCircle = document.getElementById("circle_diameter");
    let sizeDiameterCircle = inputDiameterCircle.value;
    let sizeAreaCircle = areaCircle(sizeDiameterCircle, numberPI); 
    const resultAreaCircle = document.getElementById("geometric_calculators_container_result_circle");
    resultAreaCircle.innerText = `El área del Círculo es de ${sizeAreaCircle} cm`
}


