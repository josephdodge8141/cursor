// Advanced JavaScript Features Demo

function logged(target) {
  const original = target;
  function replacement(...args) {
    console.log(`Calling method with args:`, args);
    return original.apply(this, args);
  }
  return replacement;
}

const customIterator = Symbol('iterator');

class NicheFeatures {
  #secretValue = 42;
  
  #registry = new FinalizationRegistry(heldValue => {
    console.log(`Object with held value ${heldValue} has been garbage collected`);
  });

  constructor() {
    this.proxyObject = new Proxy({}, {
      get: (target, prop) => {
        console.log(`Accessing property: ${prop.toString()}`);
        return target[prop] ?? 'Property not found';
      },
      set: (target, prop, value) => {
        console.log(`Setting property: ${prop.toString()} = ${value}`);
        target[prop] = value;
        return true;
      }
    });

    this.customObject = {
      [Symbol.toPrimitive](hint) {
        switch (hint) {
          case 'number': return 42;
          case 'string': return 'Custom object';
          default: return null;
        }
      }
    };
  }

  async *generateSequence() {
    for (let i = 0; i < 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i * this.#secretValue;
    }
  }

  taggedTemplate(strings, ...values) {
    return strings.reduce((result, str, i) => {
      const value = values[i] ? values[i].toString().toUpperCase() : '';
      return result + str + value;
    }, '');
  }

  createWeakReference(obj) {
    const ref = new WeakRef(obj);
    this.#registry.register(obj, 'Demo object');
    return ref;
  }

  complexCalculation = logged(function(x) {
    return x * this.#secretValue;
  });

  *[Symbol.iterator]() {
    yield* this.generateSequence();
  }
}

const demo = new NicheFeatures();

demo.proxyObject.test = 'value';
console.log(demo.proxyObject.nonexistent);

console.log(+demo.customObject);
console.log(`${demo.customObject}`);

const name = 'world';
console.log(demo.taggedTemplate`Hello ${name}!`);

async function runDemo() {
  for await (const value of demo.generateSequence()) {
    console.log('Generated value:', value);
  }

  const obj = { data: 'test' };
  const weakRef = demo.createWeakReference(obj);
  console.log(weakRef.deref()?.data);

  console.log(demo.complexCalculation(2));
}

runDemo().catch(console.error);
