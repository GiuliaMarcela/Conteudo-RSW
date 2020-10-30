export default class FuncionarioSchema {
  static schema = {
    name: 'Funcionario',
    properties: {
      id: 'int',
      nome: 'string',
      cpf: 'string',
    },
  };
}
