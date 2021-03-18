select count("cities".*) as "totalCities",
        "countries"."name" as "country"
from "cities"
join "countries" using ("countryId")
group by "countries"."countryId";
