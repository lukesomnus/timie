import DataType from 'sequelize';
import Model from '../sequelize';

const User = Model.define('Todo', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  text: {
    type: DataType.STRING(255),
    defaultValue: '',
  },

  isCompleted: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },

}, {

  indexes: [{
    fields: ['text']
  }, ],

});

export default User;
