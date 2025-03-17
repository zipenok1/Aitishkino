const sequelize = require('../db')
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id_user:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email:{
      type: DataTypes.STRING,
      unique: true,
    },
    password:{
      type: DataTypes.STRING,
    },
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    tableName: 'user',
    timestamps: false,
    });

  const Role = sequelize.define('role', {
    id_role:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name:{
      type: DataTypes.STRING,
      defaultValue: "ADMIN",
    },
  },{
    tableName: 'role',
    timestamps: false,
  });

const Newsletter = sequelize.define('newsletter', {
    id_newsletter: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },{
    tableName: 'newsletter',
    timestamps: false,
  });

const Reservation = sequelize.define('reservation', {
    id_reservation: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fio: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_shifts: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    tableName: 'reservation',
    timestamps: true,
  });

const Reviews = sequelize.define('reviews', {
    id_reviewes: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fio: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },{
    tableName: 'reviews',
    timestamps: false,
  });

const Events = sequelize.define('events', {
    id_events: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },{
    tableName: 'events',
    timestamps: false,
  });

const Teachers = sequelize.define('teachers', {
    id_teachers: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fio: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    link_img: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },{
    tableName: 'teachers',
    timestamps: false,
  });

const Shifts = sequelize.define('shifts', {
    id_shifts: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    partprice: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    link_img: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },{
    tableName: 'shifts',
    timestamps: true,
  });

const Photo = sequelize.define('photo', {
    id_photo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    link_img: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    id_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    tableName: 'photo',
    timestamps: false,
  });

const Type = sequelize.define('type', {
    id_type: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },{
    tableName: 'type',
    timestamps: false,
  });

const Program = sequelize.define('program', {
    id_program: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },{
    tableName: 'program',
    timestamps: false,
  });

const News = sequelize.define('news', {
    id_news: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    link_img: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },{
    tableName: 'news',
    timestamps: false,
  });

const Partners = sequelize.define('partners', {
    id_partners: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    link_img: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },{
    tableName: 'partners',
    timestamps: false,
  });

User.belongsTo(Role, { foreignKey: 'id_role', targetKey: 'id_role' });
Reservation.belongsTo(Shifts, { foreignKey: 'id_shifts', targetKey: 'id_shifts' });
Shifts.hasMany(Reservation, { foreignKey: 'id_shifts', targetKey: 'id_shifts' });
Photo.belongsTo(Type, { foreignKey: 'id_type', targetKey: 'id_type', onDelete: 'CASCADE' });
Type.hasMany(Photo, { foreignKey: 'id_type', targetKey: 'id_type' });

module.exports = {
    User,
    Role,
    Newsletter,
    Reservation,
    Reviews,
    Events,
    Teachers,
    Shifts,
    Photo,
    Type,
    Program,
    News,
    Partners,
}