/**
 * @file Defines constants for predefined main category data, serving as a single source of truth.
 * @author Andres Maneiro
 */

/**
 * @constant MainCategoryList
 * @description A read-only object mapping main category keys to their corresponding IDs.
 * This data is considered static and is used for seeding or referencing fixed categories in the code.
 */
export const MainCategoryList = {
	COMPUTER: '1',
	SCREENS: '2',
	PRINTERS: '3',
	PARTS: '4',
	FINANTIALPRINTER: '5'
} as const
