export const responseAPI = (
  res,
  msg,
  status = 400,
  data = null,
  error = null,
) => {
  if (status === 200 || status === 201) {
    return res.status(status).json({
      success: true,
      msg,
      data,
    });
  } else {
    return res.status(status).json({
      success: false,
      msg,
      error,
    });
  }
};
