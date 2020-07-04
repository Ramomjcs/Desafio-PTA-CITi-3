const keystone = require('keystone');

const { Types } = keystone.Field;

const Hotdog = new keystone.List('Hotdog');

Hotdog.add({
  name: { type: Types.Text, required: true, initial: true, index: true },
  description: { type: Types.Text, required: true, initial: true, index: true },
  price: { type: Types.Text, required: true, initial: true, index: true },
  image: { type: Types.CloudinaryImages, require: true, initial: true, },
});

Hotdog.register();