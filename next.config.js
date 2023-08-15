/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: { styledComponents: true },
  images: {
    domains: ["example.com"], // Thay thế bằng tên miền của ảnh
    deviceSizes: [320, 640, 768, 1024, 1600], // Các kích thước màn hình hỗ trợ
    imageSizes: [16, 32, 48, 64, 96], // Các kích thước biến thể ảnh tạo ra
  },
};

module.exports = nextConfig;
