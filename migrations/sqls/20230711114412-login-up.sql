/* Replace with your SQL commands */
-- Table: public.login

-- DROP TABLE IF EXISTS public.login;

CREATE TABLE IF NOT EXISTS public.login

(
    user_id integer NOT NULL,
    email_id text COLLATE pg_catalog."default" NOT NULL,
   role text,
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.signin (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

