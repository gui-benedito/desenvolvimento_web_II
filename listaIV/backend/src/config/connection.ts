import { Sequelize } from "sequelize-typescript";
import { Fornecedor_Produto } from "../models/Fornecedor_Produto";
import { Fornecedor } from "../models/Fornecedor";
import { Produto } from "../models/Produto";

const sequelize = new Sequelize({
    database: 'atv4',
    username: 'root',
    password: 'fatec', 
    host: 'localhost',
    dialect: 'mysql',
    models: [Fornecedor_Produto, Fornecedor, Produto], 
  });
  
  export default sequelize;