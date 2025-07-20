/**
 * @description A deeply readonly object containing standard HTTP status codes.
 * Each key is a numeric status code, and the value is an object with the status `name` and `message`.
 * This structure ensures type safety and prevents runtime modifications.
 *
 * @example
 * import httpStatus from './http-status';
 * console.log(httpStatus[404].message); // Outputs: The requested resource could not be found...
 * console.log(httpStatus[200].name); // Outputs: OK
 */
export const httpStatus = {
	100: {
		statusCode: 100,
		name: 'Continue',
		message: 'The server has received the request headers and the client should proceed to send the request body.'
	},
	101: {
		statusCode: 101,
		name: 'Switching Protocols',
		message: 'The requester has asked the server to switch protocols and the server has agreed to do so.'
	},
	102: {
		statusCode: 102,
		name: 'Processing',
		message: 'The server has received and is processing the request, but no response is available yet.'
	},
	103: {
		statusCode: 103,
		name: 'Early Hints',
		message: 'Used to return some response headers before final HTTP message.'
	},
	200: { statusCode: 200, name: 'OK', message: 'Standard response for successful HTTP requests.' },
	201: {
		statusCode: 201,
		name: 'Created',
		message: 'The request has been fulfilled, resulting in the creation of a new resource.'
	},
	202: {
		statusCode: 202,
		name: 'Accepted',
		message: 'The request has been accepted for processing, but the processing has not been completed.'
	},
	203: {
		statusCode: 203,
		name: 'Non-Authoritative Information',
		message:
			"The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response."
	},
	204: {
		statusCode: 204,
		name: 'No Content',
		message: 'The server successfully processed the request and is not returning any content.'
	},
	205: {
		statusCode: 205,
		name: 'Reset Content',
		message:
			'The server successfully processed the request, but is not returning any content. This response requires that the requester reset the document view.'
	},
	206: {
		statusCode: 206,
		name: 'Partial Content',
		message: 'The server is delivering only part of the resource due to a range header sent by the client.'
	},
	207: {
		statusCode: 207,
		name: 'Multi-Status',
		message:
			'The message body that follows is by default an XML message and can contain a number of separate response codes.'
	},
	208: {
		statusCode: 208,
		name: 'Already Reported',
		message: 'The members of a DAV binding have already been enumerated in a preceding part of the response.'
	},
	226: {
		statusCode: 226,
		name: 'IM Used',
		message:
			'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations.'
	},
	300: {
		statusCode: 300,
		name: 'Multiple Choices',
		message: 'Indicates multiple options for the resource from which the client may choose.'
	},
	301: {
		statusCode: 301,
		name: 'Moved Permanently',
		message: 'This and all future requests should be directed to the given URI.'
	},
	302: {
		statusCode: 302,
		name: 'Found',
		message: 'Indicates that the resource has been temporarily moved to a different URI.'
	},
	303: {
		statusCode: 303,
		name: 'See Other',
		message: 'The response to the request can be found under another URI using the GET method.'
	},
	304: {
		statusCode: 304,
		name: 'Not Modified',
		message: 'Indicates that the resource has not been modified since the version specified by the request headers.'
	},
	305: {
		statusCode: 305,
		name: 'Use Proxy',
		message:
			'The requested resource is available only through a proxy, the address for which is provided in the response.'
	},
	307: {
		statusCode: 307,
		name: 'Temporary Redirect',
		message:
			'The request should be repeated with another URI, but future requests should still use the original URI.'
	},
	308: {
		statusCode: 308,
		name: 'Permanent Redirect',
		message: 'The request and all future requests should be repeated using another URI.'
	},
	400: {
		statusCode: 400,
		name: 'Bad Request',
		message: 'The server cannot or will not process the request due to an apparent client error.'
	},
	401: {
		statusCode: 401,
		name: 'Unauthorized',
		message: 'Authentication is required and has failed or has not yet been provided.'
	},
	402: {
		statusCode: 402,
		name: 'Payment Required',
		message: 'Reserved for future use. This code is not usually used.'
	},
	403: { statusCode: 403, name: 'Forbidden', message: 'The request was valid, but the server is refusing action.' },
	404: {
		statusCode: 404,
		name: 'Not Found',
		message: 'The requested resource could not be found but may be available in the future.'
	},
	405: {
		statusCode: 405,
		name: 'Method Not Allowed',
		message: 'A request method is not supported for the requested resource.'
	},
	406: {
		statusCode: 406,
		name: 'Not Acceptable',
		message:
			'The requested resource is capable of generating only content not acceptable according to the Accept headers.'
	},
	407: {
		statusCode: 407,
		name: 'Proxy Authentication Required',
		message: 'The client must first authenticate itself with the proxy.'
	},
	408: { statusCode: 408, name: 'Request Timeout', message: 'The server timed out waiting for the request.' },
	409: {
		statusCode: 409,
		name: 'Conflict',
		message: 'The request could not be processed because of conflict in the request.'
	},
	410: {
		statusCode: 410,
		name: 'Gone',
		message: 'The resource requested is no longer available and will not be available again.'
	},
	411: {
		statusCode: 411,
		name: 'Length Required',
		message: 'The request did not specify the length of its content, which is required.'
	},
	412: {
		statusCode: 412,
		name: 'Precondition Failed',
		message: 'The server does not meet one of the preconditions that the requester put on the request.'
	},
	413: {
		statusCode: 413,
		name: 'Payload Too Large',
		message: 'The request is larger than the server is willing or able to process.'
	},
	414: { statusCode: 414, name: 'URI Too Long', message: 'The URI provided was too long for the server to process.' },
	415: {
		statusCode: 415,
		name: 'Unsupported Media Type',
		message: 'The request entity has a media type which the server or resource does not support.'
	},
	416: {
		statusCode: 416,
		name: 'Range Not Satisfiable',
		message: 'The client has asked for a portion of the file, but the server cannot supply that portion.'
	},
	417: {
		statusCode: 417,
		name: 'Expectation Failed',
		message: 'The server cannot meet the requirements of the Expect request-header field.'
	},
	418: {
		statusCode: 418,
		name: "I'm a teapot",
		message: 'Any attempt to brew coffee with a teapot should result in this error.'
	},
	421: {
		statusCode: 421,
		name: 'Misdirected Request',
		message: 'The request was directed at a server that is not able to produce a response.'
	},
	422: {
		statusCode: 422,
		name: 'Unprocessable Entity',
		message: 'The request was well-formed but was unable to be followed due to semantic errors.'
	},
	423: { statusCode: 423, name: 'Locked', message: 'The resource that is being accessed is locked.' },
	424: {
		statusCode: 424,
		name: 'Failed Dependency',
		message: 'The request failed because it depended on another request and that request failed.'
	},
	425: {
		statusCode: 425,
		name: 'Too Early',
		message: 'The server is unwilling to risk processing a request that might be replayed.'
	},
	426: {
		statusCode: 426,
		name: 'Upgrade Required',
		message: 'The client should switch to a different protocol such as TLS/1.0.'
	},
	428: {
		statusCode: 428,
		name: 'Precondition Required',
		message: 'The origin server requires the request to be conditional.'
	},
	429: {
		statusCode: 429,
		name: 'Too Many Requests',
		message: 'The user has sent too many requests in a given amount of time.'
	},
	431: {
		statusCode: 431,
		name: 'Request Header Fields Too Large',
		message: 'The server is unwilling to process the request because its header fields are too large.'
	},
	451: {
		statusCode: 451,
		name: 'Unavailable For Legal Reasons',
		message: 'A server operator has received a legal demand to deny access to a resource.'
	},
	500: {
		statusCode: 500,
		name: 'Internal Server Error',
		message: 'A generic error message, given when an unexpected condition was encountered.'
	},
	501: {
		statusCode: 501,
		name: 'Not Implemented',
		message: 'The server does not recognize the request method or lacks the ability to fulfill the request.'
	},
	502: {
		statusCode: 502,
		name: 'Bad Gateway',
		message:
			'The server was acting as a gateway or proxy and received an invalid response from the upstream server.'
	},
	503: {
		statusCode: 503,
		name: 'Service Unavailable',
		message: 'The server is currently unavailable (overloaded or down for maintenance).'
	},
	504: {
		statusCode: 504,
		name: 'Gateway Timeout',
		message:
			'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.'
	},
	505: {
		statusCode: 505,
		name: 'HTTP Version Not Supported',
		message: 'The server does not support the HTTP protocol version used in the request.'
	},
	506: {
		statusCode: 506,
		name: 'Variant Also Negotiates',
		message: 'Transparent content negotiation for the request results in a circular reference.'
	},
	507: {
		statusCode: 507,
		name: 'Insufficient Storage',
		message: 'The server is unable to store the representation needed to complete the request.'
	},
	508: {
		statusCode: 508,
		name: 'Loop Detected',
		message: 'The server detected an infinite loop while processing the request.'
	},
	510: {
		statusCode: 510,
		name: 'Not Extended',
		message: 'Further extensions to the request are required for the server to fulfill it.'
	},
	511: {
		statusCode: 511,
		name: 'Network Authentication Required',
		message: 'The client needs to authenticate to gain network access.'
	}
} as const

export type HttpStatus = keyof typeof httpStatus

export default httpStatus
