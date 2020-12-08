class ErrorRoute extends Error {
  code: number;
  constructor(message: string, errorCode: number) {
    super(message); // Já vem da classe Error, temos essa propriedade herdada que passamos para o controlador
    this.code = errorCode;
  }
}

export default ErrorRoute;
