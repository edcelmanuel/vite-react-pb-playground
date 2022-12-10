migrate((db) => {
  const collection = new Collection({
    "id": "xnaziwjhm64k1or",
    "created": "2022-12-09 08:31:19.105Z",
    "updated": "2022-12-09 08:31:19.105Z",
    "name": "xcoords",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wlotmeic",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nfxzlhef",
        "name": "coordinates",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "dqil5ipc",
        "name": "picture",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xnaziwjhm64k1or");

  return dao.deleteCollection(collection);
})
