exports.up = function(knex) {
  return knex.schema
  .createTable("projects",table=>{
      table.increments("project_id")
      table.text("project_name",128).notNullable()
      table.text("project_description",128)
      table.boolean("project_completed").defaultTo(false)
  })
  .createTable("resources",table=>{
    table.increments("resource_id")
    table.text("resource_name",128).notNullable().unique()
    table.text("resource_description",128)
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("projects")
  .dropTableIfExists("resources")
};
