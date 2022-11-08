import react from '@vitejs/plugin-react';

const config = {
  plugins: [
    react({
      babel: {
        plugins: ['react-native-web'],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['react-native'],
  },
};

export default config;
