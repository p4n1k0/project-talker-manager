const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../../src/index');
const { expect } = chai;

chai.use(chaiHttp);


describe('Teste do endpoint /login', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('endpoint POST /login retorna token', async () => {
        const data = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });

        expect(data.status).to.be.deep.eq(200);
        expect(data.body).to.be.deep.eq({ token: data.body.token });
    });

    it('endpoint POST /login sem email, retorna um erro', async () => {
        const data = await chai.request(app).post('/login').send({ email: undefined });

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O campo "email" é obrigatório' });
    });

    it('endpoint POST /login formato errado de email, retorna um erro', async () => {
        const data = await chai.request(app).post('/login').send({ email: 'emnailemail', password: '123456' });

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O "email" deve ter o formato "email@email.com"' });
    });

    it('endpoint POST /login sem password', async () => {
        const data = await chai.request(app).post('/login').send({ email: 'email@email.com' });

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O campo "password" é obrigatório' });
    });

    it('endpoint POST /login com password < 6 caracteres, retorne um erro', async () => {
        const data = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '12345' });

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    });
});
