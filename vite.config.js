import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 하위 경로(/<repo>/)에서도 동작하도록 상대 경로로 빌드
export default defineConfig({
  base: './',
  plugins: [react()]
});
