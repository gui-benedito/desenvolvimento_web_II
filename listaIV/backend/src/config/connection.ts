import { Sequelize } from "sequelize-typescript";
import { Fornecedor_Produto } from "../models/Fornecedor_Produto";
import { Fornecedor } from "../models/Fornecedor";
import { Produto } from "../models/Produto";
import Compra from "../models/Compra";

const sequelize = new Sequelize({
    database: 'atv4',
    username: 'root',
    password: 'fatec', 
    host: 'localhost',
    dialect: 'mysql',
    models: [Fornecedor_Produto, Fornecedor, Produto, Compra], 
  });
  
  export default sequelize;