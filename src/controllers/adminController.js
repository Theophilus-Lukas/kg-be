const { Admin, User } = require("../models");
const asyncHandler = require("express-async-handler");

module.exports = {
	getAllAdmin: async (req, res) => {
		try {
			const data = await Admin.findAll();

			return res.sendJson(200, true, "sucess get all data admin", data);
		} catch (error) {
			return res.sendJson(500, false, error, {});
		}
	},

	createAdmin: asyncHandler(async (req, res) => {
		const { user_id } = req.body;

		let user = await User.findOne({
			where: {
				id: user_id,
			},
		});

		if (!user) {
			return res.sendJson(400, false, "Invalid user Id", {});
		}

		let admin = await Admin.findOne({
			where: {
				id: user_id,
			},
		});

		if (admin) {
			return res.sendJson(
				400,
				false,
				`user with id ${user_id} is already an admin`,
				admin
			);
		}

		const created = await Admin.create({
			id: user_id,
			name: user.full_name,
		});

		return res.sendJson(200, true, "sucess create data admin", created);
	}),

	makeUserStudent: async (req, res) => {
		const { user_id } = req.body;
		let student;

		const user = await User.findOne({
			where: {
				id: user_id,
			},
		});
		return res.sendJson(200, true, "success", student);
	},

	aprooveAdministration: async (req, res) => {
		let administration;
		return res.sendJson(200, true, "success", administration);
	},
};
