import { sequelize } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../../Category/MainCategory/domain/MainCategory'
import { type RawStatusCountData, type StatusCountData } from './types'

/**
 * @function fetchAndProcessStatusData
 * @description Fetches and processes computer status data from the database.
 * @returns {Promise<StatusCountData[]>} A promise that resolves to the processed status data.
 */
export async function fetchAndProcessStatusData(): Promise<StatusCountData[]> {
	const result = (await DeviceModel.findAll({
		attributes: [
			[sequelize.col('status.name'), 'name'],
			[sequelize.fn('COUNT', sequelize.col('*')), 'count']
		],
		include: [
			{
				association: 'category',
				attributes: [],
				where: { mainCategoryId: MainCategoryList.COMPUTER }
			},
			{ association: 'status', attributes: [] }
		],
		group: ['status.name'],
		order: [[sequelize.col('status.name'), 'ASC']],
		raw: true
	})) as unknown as RawStatusCountData[]

	return result.map(status => ({ name: status.name, count: Number(status.count) })).sort((a, b) => b.count - a.count)
}
