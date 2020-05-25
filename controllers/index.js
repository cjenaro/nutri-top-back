const db = require('diskdb')
db.connect('./nutridb', ['fish', 'cereal', 'egg', 'fat', 'fishAG', 'meat', 'meatAG', 'misc', 'fruit', 'milk', 'prodAZ', 'vegetable'])

exports.getAllFish = async (req, res) => {
  res.json(await getAll('fish'))
}

exports.getFishByName = async (req, res) => {
  try {
    res.json(await getByName('fish', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getAllCereal = async (_, res) => {
  res.json(await getAll('cereal'))
}

exports.getAllEgg = async (_, res) => {
  res.json(await getAll('egg'))
}

exports.getAllFat = async (_, res) => {
  res.json(await getAll('fat'))
}

exports.getAllFishAG = async (_, res) => {
  res.json(await getAll('fishAG'))
}

exports.getAllMeat = async (_, res) => {
  res.json(await getAll('meat'))
}

exports.getAllMeatAG = async (_, res) => {
  res.json(await getAll('meatAG'))
}

exports.getAllMisc = async (_, res) => {
  res.json(await getAll('misc'))
}

exports.getAllFruit = async (_, res) => {
  res.json(await getAll('fruit'))
}

exports.getAllMilk = async (_, res) => {
  res.json(await getAll('milk'))
}

exports.getAllProdAZ = async (_, res) => {
  res.json(await getAll('prodAZ'))
}

exports.getAllVegetable = async (_, res) => {
  res.json(await getAll('vegetable'))
}

exports.getCerealByName = async (req, res) => {
  try {
    res.json(await getByName('cereal', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getEggByName = async (req, res) => {
  try {
    res.json(await getByName('egg', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getFatByName = async (req, res) => {
  try {
    res.json(await getByName('fat', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getFishAGByName = async (req, res) => {
  try {
    res.json(await getByName('fishAG', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getMeatByName = async (req, res) => {
  try {
    res.json(await getByName('meat', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getMeatAGByName = async (req, res) => {
  try {
    res.json(await getByName('meatAG', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getMiscByName = async (req, res) => {
  try {
    res.json(await getByName('misc', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getFruitByName = async (req, res) => {
  try {
    res.json(await getByName('fruit', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getMilkByName = async (req, res) => {
  try {
    res.json(await getByName('milk', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getProdAZByName = async (req, res) => {
  try {
    res.json(await getByName('prodAZ', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getVegetableByName = async (req, res) => {
  try {
    res.json(await getByName('vegetable', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function getAll(collection) {
  return await db[collection].find().filter(i => !!i['Nº'] || i['Energía'] === 'kcal')
}

async function getByName(collection, req) {
    if (!req.params.name) throw new Error('No name was provided!')
    const result = await db[collection].find().filter(i => (i.Alimento.toLowerCase().includes(req.params.name.toLowerCase()) || i['Energía'] === 'kcal'))
    return result
}
