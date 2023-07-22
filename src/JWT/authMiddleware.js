const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  // Obtenha o token do header da requisição
  const token = req.header('x-auth-token');

  // Verifique se o token não existe
  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado. Acesso não autorizado.' });
  }

  try {
    // Verifique o token e decodifique o payload
    const decoded = jwt.verify(token, 'chave-secreta-do-jwt'); // Substitua pela sua chave secreta

    // Adicione o ID do usuário ao objeto de requisição
    req.user = decoded.user;

    // Continue com o próximo middleware ou rota
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido. Acesso não autorizado.' });
  }
}

module.exports = authMiddleware;
