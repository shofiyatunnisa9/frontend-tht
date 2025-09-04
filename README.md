## Getting Started

---

### 1. Clone Repo

```bash
git clone <repo-url>
cd frontend
```

---

### 2. Install depedencies

```bash
npm install
```

---

### 3. Jalankan development server

```bash
npm run dev
```

---

### Stuctur Folder

- app/
  - products/
    - page.tsx → List products
    - create.tsx → Add product
    - edit/[id].tsx → Edit product
  - profile/
    - page.tsx → User profile
  - login/
    - page.tsx → Login page
  - register/
    - page.tsx → Register page
- components/
  - Navbar.tsx → Global navigation
- hook/
  - useAuth.ts → Login & register
  - useProfile.ts → Fetch profile
  - useProducts.ts → CRUD products
- utils/
  - api.ts → Axios instance
