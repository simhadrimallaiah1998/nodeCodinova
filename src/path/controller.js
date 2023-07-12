const { query } = require("express");
const pool = require("../../database");
const service = require("./service");

const userRegister = (req, res) => {
  try {
    const { id, email_id, user_name, role } = req.body;
    pool.query(service.checkuserIdExists, [id], (error, results) => {
      // if (results.rows.length) {
      //   res.status(400).send("The User's is Already Existed");
      // }
      pool.query(
        service.userRegister,
        [id, email_id, user_name, role],
        (error, results) => {
          if (error) throw error;

          res.status(201).send(results.rows);
        }
      );
    });
  } catch (err) {
    console.log(err);
  }
};

const userLogin = (req, res) => {
  try {
    const { user_id, email_id, role } = req.body;
    pool.query(service.checkuserIdExists, [email_id], (error, results) => {
      // if (!results) {
      //   res.send("The User Has Not Registred yet..!");
      // }
      pool.query(
        service.userLogin,
        [user_id, email_id, role],
        (error, results) => {
          if (error) throw error;
          res.status(200).send(results.rows);
        }
      );
    });
  } catch (err) {
    console.log(err);
  }
};

const insertProduct = (req, res) => {
  try {
    const { id, name, category, quantity, price } = req.body;
    pool.query(
      service.insertProduct,
      [id, name, category, quantity, price],
      (error, results) => {
        if (error) throw error;
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const insertSale = (req, res) => {
  try {
    const { id, invoice_number, employee_id, discount, vat_applied } = req.body;
    pool.query(
      service.saleData,
      [id, invoice_number, employee_id, discount, vat_applied],
      (error, results) => {
        if (error) throw error;
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  userRegister,
  userLogin,
  insertProduct,
  insertSale,
};
