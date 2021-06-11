
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_description: 'work', task_notes: 'Have fun!', task_completed: 1, project_id: 2 }

      ]);
    });
};
