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
.createTable("tasks",table=>{
  table.increments("task_id")
  table.text("task_description",128).notNullable().unique()
  table.text("task_notes")
  table.boolean("task_completed").defaultTo(0)
  table.integer("project_id")
  .unsigned()
  .notNullable()
  .references("project_id")
  .inTable('projects')
  .onUpdate('RESTRICT')
  .onDelete('RESTRICT');
})
};

exports.down = function(knex) {
  return knex.schema
  
  .dropTableIfExists("resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("projects")
};
