const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const app = require('../src/app/app');

describe('Rota /mothers', () => {
  let server;

  before((done) => {
    server = app.listen(3000, done); // Certifique-se de usar a porta correta aqui (por exemplo, 3000).
  });

  after((done) => {
    server.close(done);
  });

  it('Deve retornar uma lista de mães', (done) => {
    chai
      .request(server)
      .get('/mothers')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length.above(0);
        done();
      });
  }).timeout(15000); // Aumentando o tempo limite para 15 segundos.

  // Restante do código dos testes...
});
