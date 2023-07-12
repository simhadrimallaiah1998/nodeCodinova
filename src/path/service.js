const userRegister =
  "insert into signin (id,email_id,user_name,role) values($1,$2,$3,$4)  returning *";

const userLogin =
  "insert into login (user_id,email_id,role) values($1,$2,$3)  returning *";

const insertProduct =
  "insert into product (id,name,category,quantity,price) values($1,$2,$3,$4,$5) returning *";

const saleData =
  "insert into sales (id,invoice_number,employee_id,discount,vat_applied) values($1,$2,$3,$4,$5) returing *";

module.exports = {
  userRegister,
  userLogin,
  insertProduct,
  saleData,
};
