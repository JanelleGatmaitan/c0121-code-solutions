select "firstName",
        "lastName"
from "customers"
join "rentals" using ("customerId")
join "payments" using ("rentalId")
join ""
