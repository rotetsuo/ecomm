const request = require ('supertest');
const {describe, expect, it} = require ('@jest/globals');
const app = require('../../../app')

let idResposta;
describe('POST /payments', ()=> {
    it('cria um pagamento', async ()=> {
        const response = await request(app)
            .post('/payments')
            .send({
                value: 678 ,
                cardName: "layssa",
                cardNumber: "4472-3594-4239-1356",
                expirationDate: "2026-02",
                cvv: "112",
                status: "CRIADO"
            })
            .expect(201);
        idResposta = response.body.id;
    });
});
describe('GET /payments/:id', () => {
    it('deve retornar um pagamento por id' , async () =>{
        await request(app)
        .get(`/payments/${idResposta}`)
        .expect(200);
    });
  });
