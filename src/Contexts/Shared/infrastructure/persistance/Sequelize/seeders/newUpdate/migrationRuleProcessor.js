const { processors } = require('../newDeviceData/processors')

const migrationRuleId = 'd335a108-e7e9-4419-b291-478378a2d4d2'
const migrationRule = {
	id: migrationRuleId,
	minRamGb: 3,
	minDiskGb: 250,
	isActive: true
}

const notProcessors = [
	'Intel(R) Core(TM)2 Duo CPU E4600  @ 2.40GHz',
	'Intel(R) Core(TM)2 Duo CPU E7200  @ 2.53GHz',
	'Intel(R) Core(TM)2 Duo CPU E7400  @ 2.80GHz',
	'Intel(R) Core(TM)2 Duo CPU E7500  @ 2.93GHz',
	'Intel(R) Core(TM)2 Duo CPU E8400  @ 3.00GHz',
	'Intel(R) Pentium(R) CPU G630 @ 2.70GHz',
	'Intel(R) Pentium(R) Dual  CPU  E2160  @ 1.80GHz',
	'Intel(R) Pentium(R) Dual  CPU  E2180  @ 2.00GHz',
	'Intel(R) Pentium(R) Dual  CPU  E2200  @ 2.20GHz',
	'Intel(R) Pentium(R) Dual  CPU  E2220  @ 2.40GHz',
	'Pentium(R) Dual-Core  CPU      E5300  @ 2.60GHz',
	'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz',
	'Intel(R) Pentium(R) D CPU 2.80GHz',
	'Intel(R) Pentium(R) CPU G620 @ 2.60GHz',
	'Intel(R) Celeron(R) CPU G1610 @ 2.60GHz',
	'Intel(R) Pentium(R) CPU G640 @ 2.80GHz',
	'Intel(R) Pentium(R) D CPU 3.40GHz',
	'Intel(R) Pentium(R) D 820 CPU @ 2.80GHz',
	'Intel(R) Celeron(R) 420 CPU @ 1.60GHz',
	'Intel(R) Celeron(R) J1800 CPU @ 2.41GHz',
	'Intel(R) Celeron(R) J4125 CPU @ 2.00GHz',
	'Intel(R) Core(TM) 2 Duo T1700 CPU @ 1.80GHz',
	'Intel(R) Core(TM) 2 Duo T5670 CPU @ 1.80GHz',
	'Intel(R) Core(TM) 2 Duo T6670 CPU @ 2.20GHz',
	'Intel(R) Core(TM) 2 Duo P7450 CPU @ 2.13GHz',
	'Intel(R) Pentium(R) D 915 CPU @ 2.80GHz',
	'Intel(R) Pentium(R) D 945 CPU @ 3.40GHz'
]

const approvedProcessors = processors.filter(p => !notProcessors.some(np => np.includes(p.number_model)))
const notApprovedProcessors = processors.filter(p => notProcessors.some(np => np.includes(p.number_model)))
console.log('Total Processors:', processors.length)
console.log('Approved Processors:', approvedProcessors.length)
console.log('Not Approved Processors:', notApprovedProcessors.length)

const processorsMigrationRulesData = approvedProcessors.map(p => ({
	migration_rule_id: migrationRuleId,
	processor_id: p.id,
	created_at: new Date(),
	updated_at: new Date()
}))

module.exports = {
	migrationRule,
	processorsMigrationRulesData
}
