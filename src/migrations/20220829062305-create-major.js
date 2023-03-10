"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("majors", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
			},
			name: {
				type: Sequelize.STRING,
			},
			head_of_major: {
				type: Sequelize.UUID,
			},
			description: {
				type: Sequelize.STRING,
			},
			thumbnail: {
				type: Sequelize.STRING,
			},
			thumbnail_link: {
				type: Sequelize.STRING,
			},
			faculty: {
				type: Sequelize.UUID,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deleted_at: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			updated_by: {
				allowNull: true,
				type: Sequelize.UUID,
			},
			created_by: {
				allowNull: true,
				type: Sequelize.UUID,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("majors");
	},
};
