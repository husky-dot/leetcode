
function reactive (target) {
  return createReactiveObject(target, mutableHandle)
}

function createReactiveObject (target, baseHandler) {
  const observer = new Proxy(target, baseHandler);
  return observer;
}

export {
  reactive
}