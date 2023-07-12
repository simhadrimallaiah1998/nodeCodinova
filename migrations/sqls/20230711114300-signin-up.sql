/* Replace with your SQL commands */
-- Table: public.signin

-- DROP TABLE IF EXISTS public.signin;

CREATE TABLE IF NOT EXISTS public.signin
(
    id integer not NULL,
    email_id text COLLATE pg_catalog."default" NOT NULL UNIQUE,
    user_name text COLLATE pg_catalog."default" NOT NULL,
    role text,
    CONSTRAINT signin_pkey PRIMARY KEY (id)
    
)

