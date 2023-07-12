/* Replace with your SQL commands */
-- Table: public.signin

-- DROP TABLE IF EXISTS public.signin;

CREATE TABLE IF NOT EXISTS public.product
(
    id integer not NULL,
    name text COLLATE pg_catalog."default" NOT NULL UNIQUE,
    category text COLLATE pg_catalog."default" NOT NULL,
    quantity text COLLATE pg_catalog."default" NOT NULL,
    price integer  NOT NULL,
    created_at date,
    CONSTRAINT product_pkey PRIMARY KEY (id)
    
)

