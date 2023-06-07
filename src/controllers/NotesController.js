const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class NotesController {
    async create(request, response) {
        const { title, description, rating, movie_tags, movie_links } = request.body;
        const { user_id } = request.params;

        if (rating < 1 || rating > 5) {
            throw new AppError("Please insert a rating between 1 and 5")
        }

        const [notesId] = await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id,
        });

        const linksInsert = movie_links.map(link => {
            return {
                notes_id: notesId,
                url: link
            }
        });

        const [linkId] = await knex("movie_links").insert(linksInsert);

        const tagsInsert = movie_tags.map(name => {
            return {
                notes_id: notesId,
                name,
                user_id
            }
        });

        const [tagsId] = await knex("movie_tags").insert(tagsInsert);

        response.json({notesId, linkId, tagsId, message: "Note Created"});

    }

    async show(request, response) {
        const { id } = request.params;

        const note = await knex("movie_notes").where({ id }).first();
        const tags = await knex("movie_tags").where({ notes_id: id }).orderBy("name");
        const links = await knex("movie_links").where({ notes_id: id }).orderBy("created_at");

        return response.json({
            ...note,
            tags,
            links
        })
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movie_notes").where({ id }).delete();

        return response.json();
    }

    async index(request, response) {
        const { title, user_id, movie_tags } = request.query;

        let notes;

        if (movie_tags) {
            const filterTags = movie_tags.split(',').map(tag => tag.trim())

            notes = await knex("movie_tags")
                .select([
                    "movie_notes.id",
                    "movie_notes.title",
                    "movie_notes.user_id"
                ])
                .where("movie_notes.user_id", user_id)
                .whereLike("movie_notes.title", `%${title}%`)
                .whereIn("name", filterTags)
                .innerJoin("movie_notes", "movie_notes.id", "movie_tags.notes_id")
                .orderBy("movie_notes.title")
        
            } else {

            notes = await knex("movie_notes")
                .where({ user_id })
                .whereLike("title", `%${title}%`)
                .orderBy("title");
        }

        const userTags = await knex("movie_tags").where({ user_id })
        const notesWithTags = notes.map(notes => {
            const noteTags = userTags.filter(tag => tag.notes_id === notes.id);

            return {
                ...notes,
                movie_tags: noteTags    
            }
        })

        return response.json(notesWithTags);
    }

}

module.exports = NotesController;