const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const server = require('../server');

describe('Rota /institutions', () => {
  beforeEach(() => {
    delete require.cache[require.resolve('../server')];
  });

  afterEach((done) => {
    // Verifique se o servidor está em execução antes de tentar fechá-lo
    if (server.listening) {
      server.close(done);
    } else {
      done();
    }
  });

  it('Deve retornar uma lista de instituições', (done) => {
    chai
      .request(server)
      .get('/childcare/institutions')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length.above(0);
        done();
      });
  });
});
