// Converting Binary to Decimal number:
const convert = () => {
    const binary = document.getElementById('b-input').value;
    // Catching error if the input is a Empty String
    if (binary === '') return alert('Conversion failed, please enter a Binary number !');
    // Cathing error if the input is not Binary 
    binary.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Conversion failed, please enter a Binary number !');
    });
    // parseInt -> to decimal
    const decimal = parseInt(binary, 2);
    document.getElementById('d-output').value = decimal;
    return true;
}