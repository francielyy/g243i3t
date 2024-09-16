const URL = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);
async function vizualiarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = res.json()
    console.log(dados);
}
vizualiarInformacoesGlobais();