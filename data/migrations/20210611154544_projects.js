const projects = require("../../api/project/router");

exports.up = function(knex) {
  return knex.schema
  .createTable("projects",table=>{
      table.increments("project_id")
      table.text("project_name",128).notNullable()
      table.text("project_description",128)
      table.bool("project_completed").defaultTo("false")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects")
};
