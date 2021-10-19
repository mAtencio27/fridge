exports.up = function(knex) {
    return knex.schema.createTable("food", (table) => {
        table.increments("id").primary();
    
        table.text("foodName");
    
        table.integer("daysfresh");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("food");
};