//Import do javaScrip é atribuido a uma variável
var chai = require('chai');
var expect = chai.expect;
//Import do arquivo
var media = require("../controller/nota")

//Definindo estrutura do teste e função anonima (AeroFuncion)
describe("Validando se aluno é apto",()=>{
    it("Matriculou e não teve notas", ()=>{
        expect(media.verificarAptidao(null,null,null,null)).to.equal(0);
    })
})
describe("Apenas notas da unidade - Media", () =>{
    it("Passando notas 3 e 9 onde media = 8", ()=> {
        expect(media.calculaMedia(7,9)).to.equal(8);
    })
    it("Passando notas 3 e 5 onde media = 4", ()=> {
        expect(media.calculaMedia(3,5)).to.equal(4);
    })
    describe("Com segunda Chamada - n1 ou n2 = null/0",() =>{
        it("1 unid =7, seg. chamada =9 media =8", ()=> {
            expect(media.calculaMedia(null,9,7)).to.equal(8);
        })
        it("2m unid =7, seg. chamada =9, media =8", ()=> {
            expect(media.calculaMedia(null,5,3)).to.equal(4);
        }) 
        it("2m unid =7, seg. chamada =9, media =8", ()=> {
            expect(media.calculaMedia(null,null,8)).to.equal(4);
        })  
    })
    describe("Nota Final",() =>{
        it("1 unid = 4, 2 unid =6, final = 8, media para final",() =>{
            expect(media.calculaMedia(4,2,null,8)).to.equal(7);
        })
        it("2 Unid = 6, seg Cha = 3, final = 3.5, media 4",()=>{
            expect(media.calculaMedia(6,null,3,3.5)).to.equal(4.5);
        })
    })
})
