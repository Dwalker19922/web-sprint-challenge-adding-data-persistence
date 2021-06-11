
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, project_name:'finish sprint',project_description:"finish mvp",project_completed:false},
      ]);
    });
};
