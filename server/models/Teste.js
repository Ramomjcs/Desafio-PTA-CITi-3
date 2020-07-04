const keystone = require('keystone');

const { Types } = keystone.Field;

const Teste = new keystone.List('Teste');

Teste.add({
  name: { type: Types.Text, required: true, initial: true, index: true },
  image: { type: Types.CloudinaryImages, require: true, initial: true, },
});

Teste.register();