declare module '*.png' {
	const value: string;
	export default value;
}

declare module '*.jpg' {
	const value: string;
	export default value;
}

declare module '*.jpeg' {
	const value: string;
	export default value;
}

declare module '*.svg' {
	const value: string;
	export default value;
}

// If you need typed imports for images, these declarations export the
// asset path as a string so `import img from './foo.png'` works without
// TypeScript errors in .tsx files.
