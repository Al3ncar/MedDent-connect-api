const getStatusMessage = (status) => {
  const httpMsg = {
    200: "A requisição foi processada com sucesso.",
    201: "O recurso foi criado com sucesso e já está disponível no sistema.",
    204: "A requisição foi processada com sucesso, porém não há conteúdo para retornar.",
    400: "A requisição enviada é inválida. Verifique os dados informados e tente novamente.",
    404: "O recurso solicitado não foi encontrado. Verifique se o identificador ou rota está correto.",
    500: "Ocorreu um erro interno no servidor ao processar a requisição. Tente novamente mais tarde.",
  };

  return (
    httpMsg[status] || "Ocorreu um erro inesperado ao processar a requisição."
  );
};

export const responseAPI = (res, status = 400, payload = null) => {
  const success = status === 200 || status === 201 || status === 204;
  return res.status(status).json({
    success,
    msg: getStatusMessage(status),
    ...(success ? { data: payload } : { error: payload }),
  });
};
