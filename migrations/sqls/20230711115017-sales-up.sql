/* Replace with your SQL commands */
/* Replace with your SQL commands */
-- Table: public.sales

-- DROP TABLE IF EXISTS public.sales;

CREATE TABLE IF NOT EXISTS public.sales

(
    id integer NOT NULL,
    invoice_number text not null,
    employee_id text not NULL,
    discount text,
    vat_applied text,
  total float,
    CONSTRAINT id FOREIGN KEY (id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

