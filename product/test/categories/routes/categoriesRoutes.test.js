import request from 'supertest';
import {describe, expect, it, jest} from '@jest/globals';
import app from '../../../app.js';

describe('GET  /categorias', () => {
    it('Deve retortar categorias', async () => {
        const response = await request(app)
            .get('/categorias')
            .expect(200);
        expect(response.body[0].nome).toEqual('INFORMÁTICA');
    });
});
let idResposta;
describe('POST /categorias', ()=> {
    it('cria uma categoria', async ()=> {
        const response = await request(app)
            .post('/categorias')
            .send({
                nome: 'CATEGORIA TESTE',
                status: 'ATIVA'
            })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(201);
        idResposta = response.body._id;
    });
});
describe('GET /payments/:id', () => {
    it('deve retornar um pagamento por id' , async () =>{
        await request(app)
        .get(`/payments/${idResposta}`)
        expect(200);
    });
  });