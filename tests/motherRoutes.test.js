const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const app = require('../src/app/app');

describe('Rota /childcare/institutions', () => {
  let server;

  before((done) => {
    server = app.listen(0, done);
  });

  after((done) => {
    server.close(done);
  });

  it('Deve retornar uma lista de instituições', (done) => {
    chai
      .request(server)
      .get('/childcare/institutions')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200); // Status code 200, não 500
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length.above(0);
        done();
      });
  });
});
