/**
 * Defines a set of predefined options for Location Status IDs.
 * These are constant values used throughout the application to represent different operational statuses of a location.
 */
export const LocationStatusOptions = {
	OPERATIONAL: '1',
	TEMPORARILY_CLOSED: '2',
	CLOSED_PERMANENTLY: '3',
	PLANNED_CLOSURE: '4',
	UNDER_CONSTRUCTION: '5'
} as const
