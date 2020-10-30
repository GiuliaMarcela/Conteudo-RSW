import FuncionarioSchema from '../schemas/FuncionarioSchema';

export default function getRealm() {
  const Realm = require('realm');
  return Realm.open({
    schema: [FuncionarioSchema],
  });
}
