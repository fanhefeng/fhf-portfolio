import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/fhf-portfolio",
	build: {
		outDir: "dist", // 输出目录
		rollupOptions: {
			input: 'src/main.jsx', // 确保这里是正确的入口文件路径
		},
	},
});
