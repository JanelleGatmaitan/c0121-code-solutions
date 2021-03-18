select "c"."firstName",
       "c"."lastName",
       sum("amount") as "totalPaid"
    from "customers" as "c"
    join "payments" using ("customerId")
    group by "customerId"
    order by "totalPaid" desc;
