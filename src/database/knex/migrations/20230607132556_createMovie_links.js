exports.up = knex => knex.schema.createTable("movie_links", table => {
    table.increments("id");
    table.text("url").notNullable();

    table.integer("notes_id").references("id").inTable("movie_notes").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable("movie_links");

