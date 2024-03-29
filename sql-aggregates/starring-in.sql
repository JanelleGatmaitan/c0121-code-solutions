select count("actorId") as "number",
        "categories"."name" as "category"
    from "categories"
    join "filmCategory" using ("categoryId")
    join "castMembers" using ("filmId")
    join "actors" using ("actorId")
    where "actors"."actorId" = 178
    group by "categories"."name";
