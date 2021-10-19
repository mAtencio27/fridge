
exports.up = function(knex) {
    return knex.schema.createTable("inside", (table) => {
        table.increments("id").primary();
    
        table.text("foodName");
        
        table.date("expiration");
    
        table.float("price");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("inside");
};
