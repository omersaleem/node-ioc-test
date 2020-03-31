
const regsitry = {
  service: {},
  model: {}
};

const serviceInstances = {};

export const Types = {
  'SERVICE': 'service',
  'MODEL': 'model'
};

export const Errors = {
  'TYPE_NOT_FOUND': 'TYPE_NOT_FOUND',
  'MODULE_NOT_FOUND': 'MODULE_NOT_FOUND'
};

export const register = (type, moduleClass) => {
  regsitry[type][moduleClass.name.toLowerCase()] = moduleClass;
}

export const unregister = () => {}

export const createInstance = (type, moduleClass, params) => {
  if (type === Types.SERVICE) {
    // create or return a singleton
    console.log('Finding Service', moduleClass.name);
    const moduleId = `${type}::${moduleClass.name.toLowerCase()}`;
    serviceInstances[moduleId] = serviceInstances[moduleId] || new moduleClass();
    return serviceInstances[moduleId];
  } else {
    // Other types are not singletons
    console.log('Creating', moduleClass.name);
    const module = regsitry[type][moduleClass.name.toLowerCase()];
    return new module(params);
  }
}

export const inject = (key) => {
  console.log(`Injecting ${key}`);
  const typeKeyPair = key.split('::');
  const type = typeKeyPair[0];
  const module = typeKeyPair[1];

  const modelClass = regsitry[type][module];
  // @TODO handle not found
  return createInstance(type, modelClass);
}
