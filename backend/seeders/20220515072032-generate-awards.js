'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return await queryInterface.bulkInsert(
      "Awards",
      [
        {
          name: "Gift Card IDR 1.000.000",
          type: "Vouchers",
          exchange_point: "500000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Gift Card IDR 500.000",
          type: "Vouchers",
          exchange_point: "250000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Old Fashion Cake",
          type: "Products",
          exchange_point: "500000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Gift Card IDR 250.000",
          type: "Vouchers",
          exchange_point: "125000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Garuda Miles 1.000",
          type: "Products",
          exchange_point: "10000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Namaste Restaurant IDR 500.000",
          type: "Vouchers",
          exchange_point: "250000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Skye Restaurant IDR 500.000",
          type: "Vouchers",
          exchange_point: "250000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Garuda Miles 2.000",
          type: "Products",
          exchange_point: "20000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Garuda Miles 3.000",
          type: "Products",
          exchange_point: "30000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Swarovski IDR 1.000.000",
          type: "Products",
          exchange_point: "500000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Swarovski IDR 2.000.000",
          type: "Products",
          exchange_point: "1000000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Swarovski IDR 4.000.000",
          type: "Products",
          exchange_point: "2000000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Krisflyer 1.000",
          type: "Products",
          exchange_point: "10000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Krisflyer 2.000",
          type: "Products",
          exchange_point: "20000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Krisflyer 3.000",
          type: "Products",
          exchange_point: "10000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Krisflyer 3.000",
          type: "Products",
          exchange_point: "10000",
          image: "https://picsum.photos/512/256",
        },
        {
          name: "Krisflyer 3.000",
          type: "Products",
          exchange_point: "10000",
          image: "https://picsum.photos/512/256",
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
