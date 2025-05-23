const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../../src/index');

const {
    allTalkers,
    addTalker,
    noNameTalker,
    noCharecterName,
    noAgeTalker, subAge,
    noTalk, noTalkWatched,
    talkWatchedError,
    noTalkRate,
    rateSix,
} = require('./mocks/talker.mock');

const { expect } = chai;


chai.use(chaiHttp);


describe('Teste do endpoint /talker', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('verifica se rota esta ok', async () => {
        const data = await chai.request(app).get('/').send();

        expect(data.status).to.be.deep.eq(200);
    });

    it('retorna lista completa de palestrantes', async () => {
        const data = await chai.request(app).get('/talker').send();

        expect(data.status).to.be.deep.eq(200);
    });

    it('retorna palestrante por id', async () => {
        const data = await chai.request(app).get('/talker/1').send();

        expect(data.status).to.be.deep.eq(200);
        expect(data.body).to.be.deep.eq(allTalkers[0]);
    });

    it('retorna erro ao não encontrar palestrante por id', async () => {
        const data = await chai.request(app).get('/talker/10000').send();

        expect(data.status).to.be.deep.eq(404);
        expect(data.body).to.be.deep.eq({ message: 'Pessoa palestrante não encontrada' });
    });

    it('ao cadastrar palestrante sem token, retorne um erro', async () => {
        const data = await chai.request(app).post('/talker').send(addTalker);

        expect(data.status).to.be.deep.eq(401);
        expect(data.body).to.be.deep.eq({ message: 'Token não encontrado' });
    });

    it('ao cadastrar palestrante com token inválido, retorne um erro', async () => {
        const data = await chai.request(app).post('/talker').send(addTalker).set('Authorization', 'Bearer 123');

        expect(data.status).to.be.deep.eq(401);
        expect(data.body).to.be.deep.eq({ message: 'Token inválido' });
    });

    it('ao cadastrar palestrante sem nome, retorne um erro', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).post('/talker').send(noNameTalker).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O campo "name" é obrigatório' });
    });

    it('ao cadastrar palestrante com nome < 3 caracteres, retorne um erro', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).post('/talker').send(noCharecterName).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    });

    it('ao cadastrar palestrante sem idade, retorne um erro', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).post('/talker').send(noAgeTalker).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O campo "age" é obrigatório' });
    });

    it('ao cadastrar palestrante com idade < 18, retorne um erro', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).post('/talker').send(subAge).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'A pessoa palestrante deve ser maior de idade' });
    });

    it('ao cadastrar palestrante sem talk, retorne um erro', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).post('/talker').send(noTalk).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O campo "talk" é obrigatório' });
    });

    it('ao cadastrar palestrante com talk sem watchedat, retorne um erro', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).post('/talker').send(noTalkWatched).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O campo "watchedAt" é obrigatório' });
    });

    it('ao cadastrar palestrante com talk e watchedat inválido, retorne um erro', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).post('/talker').send(talkWatchedError).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    });

    it('ao cadastrar palestrante com talk sem rate, retorne um erro', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).post('/talker').send(noTalkRate).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O campo "rate" é obrigatório' });
    });

    it('ao cadastrar palestrante com talk e rate inválido, retorne um erro', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).post('/talker').send(rateSix).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(400);
        expect(data.body).to.be.deep.eq({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    });

    it('cadastra palestrante com sucesso', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).post('/talker').send(addTalker).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(201);
    });

    it('atualiza palestrante com sucesso', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).put('/talker/5').send({
            "name": "Danielle Santos",
            "age": 56,
            "talk": {
                "watchedAt": "22/10/2019",
                "rate": 4
            }
        }).set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(200);
    });

    it('exclui palestrante com sucesso', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).delete('/talker/5').send().set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(204);
    });

    it('buscando palestrante por nome', async () => {
        const token = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '123456' });
        const data = await chai.request(app).get('/talker/search?q=M').send().set('Authorization', token.body.token);

        expect(data.status).to.be.deep.eq(200);
        expect(data.body).to.be.deep.eq([{
            "name": "Marcos Costa",
            "age": 24,
            "id": 4,
            "talk": { "watchedAt": "23/10/2020", "rate": 5 }
        }])
    });

});
