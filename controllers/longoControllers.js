const db = require('diskdb')
db.connect('./longodb', ['longoCereal', 'longoEgg', 'longoFat', 'longoFruit', 'longoMeat', 'longoMisc', 'longoMilk', 'longoVegetable'])

exports.getAllCereal = async (req, res) => {
  res.json(await getAll('longoCereal'))
}

exports.getCerealByName = async (req, res) => {
  try {
    res.json(await getByName('longoCereal', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getAllEgg = async (req, res) => {
  res.json(await getAll('longoEgg'))
}

exports.getEggByName = async (req, res) => {
  try {
    res.json(await getByName('longoEgg', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getAllFat = async (req, res) => {
  res.json(await getAll('longoFat'))
}

exports.getFatByName = async (req, res) => {
  try {
    res.json(await getByName('longoFat', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getAllFruit = async (req, res) => {
  res.json(await getAll('longoFruit'))
}

exports.getFruitByName = async (req, res) => {
  try {
    res.json(await getByName('longoFruit', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getAllMeat = async (req, res) => {
  res.json(await getAll('longoMeat'))
}

exports.getMeatByName = async (req, res) => {
  try {
    res.json(await getByName('longoMeat', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getAllMilk = async (req, res) => {
  res.json(await getAll('longoMilk'))
}

exports.getMilkByName = async (req, res) => {
  try {
    res.json(await getByName('longoMilk', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getAllMisc = async (req, res) => {
  res.json(await getAll('longoMisc'))
}

exports.getMiscByName = async (req, res) => {
  try {
    res.json(await getByName('longoMisc', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.getAllVegetable = async (req, res) => {
  res.json(await getAll('longoVegetable'))
}

exports.getVegetableByName = async (req, res) => {
  try {
    res.json(await getByName('longoVegetable', req))
  } catch (err) {
    console.log(err)
    throw err
  }
}
async function getAll(collection) {
  return await db[collection].find()
}

async function getByName(collection, req) {
    if (!req.params.name) throw new Error('No name was provided!')
    const result = await db[collection].find().filter(i => (i.Alimento.toLowerCase().includes(req.params.name.toLowerCase())))
    return result
}
