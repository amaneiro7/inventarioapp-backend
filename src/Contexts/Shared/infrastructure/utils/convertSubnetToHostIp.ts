/**
 * Converts an IP address ending in .0 to .1, leaving other IP addresses unchanged.
 *
 * @param ipAddress The original IP address string (e.g., "10.100.10.0" or "192.168.79.169").
 * @returns The converted IP address string, or the original if no conversion is needed/possible.
 */
function convertSubnetToHostIp(ipAddress: string | null | undefined): string | null | undefined {
	if (!ipAddress) {
		return ipAddress // Return as is if null or undefined
	}

	const parts = ipAddress.split('.') // Split the IP into its four octets

	// Check if it's a valid IPv4 address (4 parts)
	if (parts.length === 4) {
		const lastOctet = parts[3] // Get the last part

		// Check if the last octet is '0'
		if (lastOctet === '0') {
			parts[3] = '1' // Change the last octet to '1'
			return parts.join('.') // Join the parts back into an IP address string
		}
	}

	return ipAddress // Return the original IP if it doesn't end in .0 or isn't a valid IPv4
}
