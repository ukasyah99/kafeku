/**
 * @param {import("knex")} knex 
 */
exports.up = async function(knex) {
  await knex.schema.createTable("categories", (table) => {
    table.string("id")
    table.string("name")
    table.string("color")
    table.string("image")
    table.primary("id")
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTable("categories")
}
