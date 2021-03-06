module.exports = {
  module: 'Antelope',
  children: [{
    module: 'Bear',
    children: [{
      module: 'Coyote',
      leaf: true
    }, {
      module: 'Donkey',
      leaf: true
    }, {
      module: 'Eagle',
      leaf: true
    }]
  }, {
    module: 'Fox',
    children: [{
      module: 'Giraffe',
      children: [{
          module: 'Hippopotamus',
          children: [
            {
              module: 'Iguana',
              leaf: true
            }, {
              module: 'Jaguar',
              leaf: true
            }, {
              module: 'Kangaroo',
              leaf: true
            }
          ]
      }]
    }, {
      module: 'Lemur',
      leaf: true
    }, {
      module: 'Magpie',
      children: [{
          module: 'Newt',
          leaf: true
        }, {
          module: 'Octopus',
          children: [
            {
              module: 'Pig',
              leaf: true
            },
            {
              module: 'Quail',
              leaf: true
            }
          ]
        }, {
          module: 'Rabbit',
          leaf: true
      }]
    }]
  }, {
    module: 'Scorpion',
    children: [{
      module: 'Turtle',
      leaf: true
    }, {
      module: 'Vulture',
      leaf: true
    }, {
      module: 'Wallaby',
      leaf: true
    }, {
      module: 'Zebra',
      leaf: true
    }]
  }, {
    module: 'One Fish',
    leaf: true
  }, {
    module: 'Two Fish',
    leaf: true
  }, {
    module: 'Red Fish',
    leaf: true
  }, {
    module: 'Blue Fish',
    leaf: true
  }]
}
