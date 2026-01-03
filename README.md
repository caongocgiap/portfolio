# Portfolio Website - Cao Ngọc Giáp

Portfolio website chuyên nghiệp được xây dựng bằng React, TypeScript và Vite. Website giới thiệu về kinh nghiệm, dự án và kỹ năng của một Backend Developer.

🌐 **Live Demo:** [ngocgiap.vercel.app](https://ngocgiap.vercel.app)

## ✨ Tính năng

- 🏠 **Trang chủ**: Giới thiệu với hiệu ứng typewriter động, tech stack và nút tải CV
- 💼 **Kinh nghiệm**: Hiển thị kinh nghiệm làm việc với giao diện terminal độc đáo
- 🚀 **Dự án**: Showcase các dự án đã thực hiện với mô tả chi tiết
- 📧 **Liên hệ**: Form liên hệ tích hợp EmailJS để gửi email trực tiếp
- 🌍 **Đa ngôn ngữ**: Hỗ trợ tiếng Việt và tiếng Anh (i18n)
- 📱 **Responsive**: Tối ưu cho mọi thiết bị (mobile, tablet, desktop)
- 🎨 **UI/UX hiện đại**: Giao diện đẹp mắt với hiệu ứng hover và animation mượt mà
- 📊 **Analytics**: Tích hợp Vercel Analytics để theo dõi traffic

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool và dev server
- **Tailwind CSS 4** - Styling framework
- **React i18next** - Internationalization

### Libraries & Tools
- **Typewriter Effect** - Hiệu ứng gõ chữ
- **EmailJS** - Gửi email từ form liên hệ
- **React Syntax Highlighter** - Highlight code
- **React Toastify** - Thông báo toast
- **Vercel Analytics** - Phân tích traffic
- **SVGR** - Import SVG như React components

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js >= 18.x
- npm hoặc yarn

### Cài đặt

```bash
# Clone repository
git clone https://github.com/caongocgiap/portfolio.git

# Di chuyển vào thư mục dự án
cd portfolio

# Cài đặt dependencies
npm install
```

### Chạy Development Server

```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:5173`

### Build cho Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 📁 Cấu trúc Dự án

```
portfolio/
├── public/                 # Static files
├── src/
│   ├── assets/           # Images, CV, icons
│   │   ├── cv/           # CV files (HTML, PDF)
│   │   └── images/       # Image assets
│   ├── components/       # React components
│   │   ├── elements/     # Header component
│   │   ├── sections/     # Home, Experience, Projects, Connect
│   │   └── ui/           # UI components (Buttons, Forms, Cards)
│   ├── config/           # Configuration files
│   │   ├── emailjs.ts    # EmailJS config
│   │   └── i18n.ts       # i18n configuration
│   ├── data/             # JSON data files
│   │   ├── experiences.json
│   │   └── projects.json
│   ├── locales/          # Translation files
│   │   ├── en.json
│   │   └── vi.json
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Các Section

### Home
- Giới thiệu với typewriter effect
- Tech stack với icons và hover effects
- Nút "Hire Me" và "View CV"

### Experience
- Hiển thị kinh nghiệm làm việc
- Giao diện terminal với syntax highlighting
- Timeline và mô tả công việc

### Projects
- Grid layout hiển thị các dự án
- Thông tin chi tiết: mô tả, trách nhiệm, công nghệ sử dụng
- Responsive cards với hover effects

### Connect
- Form liên hệ tích hợp EmailJS
- Hiển thị thông tin developer dưới dạng code
- Social media links (GitHub, LinkedIn, Facebook)

## 🌐 Đa ngôn ngữ

Website hỗ trợ 2 ngôn ngữ:
- 🇻🇳 Tiếng Việt
- en English

Người dùng có thể chuyển đổi ngôn ngữ bằng nút ở dưới cùng góc phải màn hình.

## 📧 Cấu hình EmailJS

Để sử dụng form liên hệ, cần cấu hình EmailJS:

1. Tạo tài khoản tại [EmailJS](https://www.emailjs.com/)
2. Tạo email template
3. Cập nhật thông tin trong `src/config/emailjs.ts`:
   - `PUBLIC_KEY`
   - `SERVICE_ID`
   - `TEMPLATE_ID`

## 🚀 Deployment

Website được deploy trên [Vercel](https://vercel.com/) tại: **ngocgiap.vercel.app**

### Deploy lên Vercel

1. Push code lên GitHub
2. Import project vào Vercel
3. Vercel sẽ tự động detect và build
4. Website sẽ được deploy tự động

## 📝 License

Public project - All rights reserved

## 👨‍💻 Tác giả

**Cao Ngọc Giáp**
- Backend Developer | Java Developer
- Email: ngocgiap5204@gmail.com
- Phone: +84 359 430 937
- Location: Ha Noi City, Vietnam

---

⭐ Nếu bạn thấy dự án này quá dở hoặc quá phông bạt thì cũng đừng gạch đá mình nha, trình mình chỉ có thế thôi à :))
