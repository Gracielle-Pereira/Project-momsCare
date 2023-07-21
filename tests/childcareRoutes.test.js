const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Importe o arquivo do servidor
const server = require('../server');

// Use o plugin chai-http
chai.use(chaiHttp);

// Teste para verificar a rota '/institutions'
describe('Rota /institutions', () => {
  it('Deve retornar uma lista de instituições', (done) => {
    chai
      .request(server)
      .get('/childcare/institutions')
      .end((err, res) => {
        // Verifique o status da resposta
        expect(res).to.have.status(200);
        // Verifique se a resposta é um array
        expect(res.body).to.be.an('array');
        // Verifique se a resposta contém pelo menos uma instituição
        expect(res.body).to.have.length.above(0);
        done();
      });
  });
});
