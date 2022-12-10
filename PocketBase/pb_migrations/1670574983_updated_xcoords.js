migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xnaziwjhm64k1or")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xnaziwjhm64k1or")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
