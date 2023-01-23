import { pool } from "config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getProducts(req, res)
    case 'POST':
      return await saveProduct(req, res)
  }
}
const getProducts = async (req, res) => {
  const [result] = await pool.query('SELECT * From product');
  console.log(result)
  return res.status(200).json(result);
}

const saveProduct = async (req, res) => {
  const { name, description,url, price } = req.body;

  const [result] = await pool.query('INSERT INTO product SET ?', {
    name,
    description,
    url,
    price,
  });

  return res
    .status(200)
    .json({ name, price,url, description, id: result.insertId });
}