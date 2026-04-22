/**
 * Custom structured logger implementation.
 */
class Logger {
	private formatMessage(level: string, message: string) {
		const timestamp = new Date().toISOString();
		return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
	}

	info(message: string) {
		console.log(this.formatMessage("info", message));
	}

	error(message: string, error?: any) {
		console.error(this.formatMessage("error", message));
		if (error) {
			console.error(error);
		}
	}

	warn(message: string) {
		console.warn(this.formatMessage("warn", message));
	}

	debug(message: string) {
		console.debug(this.formatMessage("debug", message));
	}
}

const logger = new Logger();
export default logger;
