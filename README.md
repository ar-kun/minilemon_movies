# Mini Lemon - Mini Movie

MiniLemon Movies adalah situs web film dan acara TV yang menyediakan informasi tentang film dan acara TV terbaru. Kami berkomitmen untuk memberikan informasi yang akurat dan terkini kepada pengguna kami. Menggunakan API Public dari TMBD (Movies).

## Langkah-langkah Instalasi

1. **Clone Repositori**

   ```bash
   git clone https://github.com/ar-kun/minilemon_movies.git
   ```

2. **Pindah ke Direktori Proyek**

   ```bash
   cd minilemon_movies
   ```

3. **Instal Dependensi**

   ```bash
   npm install
   ```

4. **Salin Berkas Konfigurasi**

   ```bash
   cp .env.example .env
   ```

   Sesuaikan informasi konfigurasi database di dalam berkas `.env`.

5. **Isi Key**

   ```
   VITE_TMDB_API_KEY=your_api_key_here
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

   Login ke website TMDB untuk mendapatkan key https://developer.themoviedb.org/reference/intro/authentication

6. **Jalankan Server Lokal**

   ```bash
   npm run dev
   ```

## Note

1. Untuk language (bahasa) belum di terapkan di semua page
2. Sistem login belum di implentasi
3. Console error karena frame google maps di page about
