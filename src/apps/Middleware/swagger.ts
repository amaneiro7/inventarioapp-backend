import swaggerJsdoc from 'swagger-jsdoc'
import { config } from '../../Contexts/Shared/infrastructure/config'

/**
 * @description Options for `swagger-jsdoc` to generate Swagger documentation from JSDoc comments.
 */
const options = {
	openapi: '3.0.0',
	definition: {
		info: {
			title: 'Inventario App API',
			version: '1.0.0',
			description: 'API para la gestión de inventarios de equipos y personal de la empresa.'
		},
		servers: [
			{
				url: `http://localhost:${config.port}/api/v1`,
				description: 'Servidor de desarrollo (HTTP)'
			},
			{
				url: `https://localhost:${config.port}/api/v1`,
				description: 'Servidor de desarrollo (HTTPS)'
			}
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
					description: 'Autenticación JWT con token Bearer'
				}
			},
			schemas: {
				UserLogin: {
					type: 'object',
					properties: {
						email: {
							type: 'string',
							description: 'Correo electrónico del usuario.',
							example: 'test@example.com'
						},
						password: {
							type: 'string',
							description: 'Contraseña del usuario.',
							example: 'password123'
						}
					}
				},
				UserRegister: {
					type: 'object',
					properties: {
						email: {
							type: 'string',
							format: 'email',
							description: 'Correo electrónico del nuevo usuario.',
							example: 'nuevo.usuario@example.com'
						},
						password: {
							type: 'string',
							format: 'password',
							description: 'Contraseña del nuevo usuario.',
							example: 'passwordSegura123'
						},
						name: {
							type: 'string',
							description: 'Nombre del nuevo usuario.',
							example: 'Juan'
						},
						lastName: {
							type: 'string',
							description: 'Apellido del nuevo usuario.',
							example: 'Pérez'
						},
						roleId: {
							type: 'string',
							description: 'ID del rol asignado al usuario.',
							example: '123e4567-e89b-12d3-a456-426614174000'
						}
					}
				},
				UserUpdate: {
					type: 'object',
					properties: {
						id: {
							type: 'string',
							description: 'ID del usuario a actualizar.',
							example: '123e4567-e89b-12d3-a456-426614174000'
						},
						payload: {
							type: 'object',
							properties: {
								name: {
									type: 'string',
									description: 'Nuevo nombre del usuario.',
									example: 'Juan Carlos'
								},
								lastName: {
									type: 'string',
									description: 'Nuevo apellido del usuario.',
									example: 'González'
								},
								email: {
									type: 'string',
									format: 'email',
									description: 'Nuevo correo electrónico del usuario.',
									example: 'juan.gonzalez@example.com'
								}
							}
						}
					}
				},
				UserChangePassword: {
					type: 'object',
					properties: {
						password: {
							type: 'string',
							format: 'password',
							description: 'Contraseña actual del usuario.',
							example: 'passwordActual'
						},
						newPassword: {
							type: 'string',
							format: 'password',
							description: 'Nueva contraseña para el usuario.',
							example: 'nuevaPasswordSegura'
						},
						reTypePassword: {
							type: 'string',
							format: 'password',
							description: 'Repetir nueva contraseña.',
							example: 'nuevaPasswordSegura'
						}
					}
				},
				UserResetPassword: {
					type: 'object',
					properties: {
						id: {
							type: 'string',
							description: 'ID del usuario cuya contraseña se va a restablecer.',
							example: '123e4567-e89b-12d3-a456-426614174000'
						}
					}
				},
				Brand: {
					type: 'object',
					properties: {
						name: {
							type: 'string',
							description: 'Nombre de la marca.',
							example: 'HP'
						}
					}
				},
				Permission: {
					type: 'object',
					properties: {
						name: {
							type: 'string',
							description: 'Nombre único del permiso (ej. users.create, devices.read).',
							example: 'users.create'
						}
					},
					required: ['name']
				},
				PermissionGroupCreate: {
					type: 'object',
					properties: {
						name: {
							type: 'string',
							description: 'Nombre único del grupo de permisos.',
							example: 'Administradores'
						},
						permissions: {
							type: 'array',
							items: {
								type: 'string',
								format: 'uuid'
							},
							description: 'Lista opcional de IDs de permisos para asignar inicialmente al grupo.',
							example: ['d8b9b9a0-5b9a-4b0f-8b0a-9b0a9b0a9b0a', 'e8b9b9a0-5b9a-4b0f-8b0a-9b0a9b0a9b0b']
						}
					},
					required: ['name']
				},
				PermissionGroupUpdate: {
					type: 'object',
					properties: {
						name: {
							type: 'string',
							description: 'Nuevo nombre opcional para el grupo de permisos.',
							example: 'Super Administradores'
						},
						permissionsToAdd: {
							type: 'array',
							items: { type: 'string', format: 'uuid' },
							description: 'Lista opcional de IDs de permisos para añadir al grupo.'
						},
						permissionsToRevoke: {
							type: 'array',
							items: { type: 'string', format: 'uuid' },
							description: 'Lista opcional de IDs de permisos para revocar del grupo.'
						}
					},
					description: 'Al menos una de las propiedades debe ser proporcionada para la actualización.'
				},
				Device: {
					type: 'object',
					properties: {
						id: {
							type: 'string',
							format: 'uuid'
						},
						serial: {
							type: 'string'
						},
						activo: {
							type: 'string'
						},
						statusId: {
							type: 'string',
							format: 'uuid'
						},
						categoryId: {
							type: 'string',
							format: 'uuid'
						},
						brandId: {
							type: 'string',
							format: 'uuid'
						},
						modelId: {
							type: 'string',
							format: 'uuid'
						},
						locationId: {
							type: 'string',
							format: 'uuid'
						}
					}
				},
				Employee: {
					type: 'object',
					properties: {
						name: {
							type: 'string'
						},
						lastName: {
							type: 'string'
						},
						email: {
							type: 'string',
							format: 'email'
						},
						phone: {
							type: 'string'
						},
						cargoId: {
							type: 'string',
							format: 'uuid'
						},
						departamentoId: {
							type: 'string',
							format: 'uuid'
						}
					}
				},
				ModelSeries: {
					type: 'object',
					properties: {
						name: {
							type: 'string',
							example: 'Latitude 7420'
						},
						brandId: {
							type: 'string',
							format: 'uuid'
						},
						categoryId: {
							type: 'string',
							format: 'uuid'
						}
					}
				},
				Location: {
					type: 'object',
					properties: {
						name: {
							type: 'string'
						},
						address: {
							type: 'string'
						},
						siteId: {
							type: 'string',
							format: 'uuid'
						}
					}
				},
				City: {
					type: 'object',
					properties: {
						name: {
							type: 'string',
							example: 'Caracas'
						},
						stateId: {
							type: 'string',
							format: 'uuid'
						}
					}
				},
				Site: {
					type: 'object',
					properties: {
						name: {
							type: 'string',
							example: 'Agencia Principal'
						},
						cityId: {
							type: 'string',
							format: 'uuid'
						},
						typeOfSiteId: {
							type: 'string',
							format: 'uuid'
						}
					}
				},
				Processor: {
					type: 'object',
					properties: {
						name: {
							type: 'string',
							example: 'Intel Core i7-10700K'
						},
						socketId: {
							type: 'string',
							format: 'uuid'
						}
					}
				},
				GenericName: {
					type: 'object',
					properties: {
						name: {
							type: 'string'
						}
					}
				}
			}
		},
		security: [
			{
				bearerAuth: []
			}
		]
	},
	apis: ['./src/apps/routes/**/*.ts', './src/apps/controllers/**/*.ts'] // Rutas a los archivos con comentarios JSDoc
}

/**
 * @description The generated Swagger documentation object.
 */
export const swaggerSpec = swaggerJsdoc(options)
