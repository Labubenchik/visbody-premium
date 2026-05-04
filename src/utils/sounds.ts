/**
 * A highly optimized synthesizer for medical-futuristic UI sounds
 * Processes audio entirely via Web Audio API for performance and zero assets loading.
 */

// Global AudioContext to reuse and avoid context limit errors
let audioCtx: AudioContext | null = null;

const getAudioContext = () => {
	if (!audioCtx) {
		audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
	}
	return audioCtx;
};

/**
 * Soft UI Click - Designed as a "deep tap" or "hollow click"
 * Requirement: Sine wave, 440Hz/220Hz, 0.05s duration, exponential decay.
 */
export const playSoftClick = (frequency = 440) => {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		// 1. Waveform - Sine for maximum smoothness
		oscillator.type = "sine";

		// 2. Frequency - 440Hz (mid) or 220Hz (low/deep)
		oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

		// 3. Gain Envelope - Fast attack and exponential decay to prevent "digital clicks"
		gainNode.gain.setValueAtTime(0.0001, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.1, ctx.currentTime + 0.01);
		gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.start();
		oscillator.stop(ctx.currentTime + 0.05);
	} catch (e) {
		console.warn("Audio playback inhibited or unsupported", e);
	}
};

/**
 * Technical Scan - A sliding frequency sound for background scanning effects
 */
export const playScanSweep = () => {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(880, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.15);

		gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.start();
		oscillator.stop(ctx.currentTime + 0.15);
	} catch (e) {
		console.warn("Audio playback inhibited or unsupported", e);
	}
};
