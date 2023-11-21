
const codigobinario = {
    'A':'01100001','À':'11100000','Á':'11100001','Â':'11100010','Ã':'11100011','B':'01100010',
'C':'01100011','Ç':'11100111','D':'01100100','E':'01100101','É':'11111011','Ê':'11111100','F':'01100110','G':'01100111','H':'01101000','I':'01101001','Í':'11101101','J':'01101010','K':'01101011','L':'01101100','M':'01101101','N':'01101110','O':'01101111','Ó':'11110011','Ô':'11110100','Õ':'11110101','P':'01110000','Q':'01110001','R':'01110010','S':'01110011','T':'01110100','U':'01110101','Ú':'11111010','V':'01110110','W':'01110111','X':'01111000','Y':'01111001','Z':'01111010','0':'0000','1':'0001','2':'0010','3':'0011','4':'0100','5':'0101','6':'0110','7':'0111','8':'1000','9':'1001',' ':'/'
};
const codigobinarioaocontrario = {}
    for(const chave in codigobinario){
        if (codigobinario.hasOwnProperty(chave)){
            codigobinarioaocontrario[codigobinario[chave]] = chave;
        }
    }              
function codificar(){
    const texto = document.getElementById('cripto').value.toUpperCase(); 
    let binariocodigo = '';

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (codigobinario[letra]){
            binariocodigo += codigobinario[letra] + ' ';
        }
    }
    document.getElementById('descripto').value = binariocodigo;
}   
function decodificar(){
    const inputBinario = document.getElementById('descripto').value;
    const binarioArray = inputBinario.split(' ');
    let textodescripto = '';
    for(let i = 0; i< binarioArray.length; i++) {
        const codigo = binarioArray[i];
        if (codigobinarioaocontrario[codigo]){
            textodescripto += codigobinarioaocontrario[codigo];
        }
        else if (codigo === '/')
        {
            textodescripto += ' ';
        }
    }
    document.getElementById('cripto').value = textodescripto;
};
