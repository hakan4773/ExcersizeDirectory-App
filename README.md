# Egzersiz Rehberi (React + TypeScript + Vite)


![Egzersiz Rehberi][((https://via.placeholder.com/800x400.png?text=Egzersiz+Rehberi))](https://exercisedirectoryapp.netlify.app/)

Egzersiz Rehberi, kullanıcıların egzersizleri keşfetmesini, kas gruplarına göre filtrelemesini ve favorilere eklemesini sağlayan modern bir web uygulamasıdır. ExerciseDB API'sini kullanarak gerçek zamanlı egzersiz verilerini sunar ve kullanıcı dostu bir arayüzle fitness yolculuğunu kolaylaştırır.

## 🚀 Özellikler

- **Egzersiz Listeleme:** ExerciseDB API'sinden alınan egzersizleri isim, hedef kas, ekipman ve GIF ile birlikte listeler.
- **Kas Grubu Filtresi:** Egzersizleri kas gruplarına göre filtreleme (ör. göğüs, sırt, kardiyo).
- **Arama Formu:** Formik ve Yup ile validasyonlu, gerçek zamanlı arama özelliği.
- **Favorilere Ekleme:** Kullanıcılar egzersizleri favorilere ekleyebilir ve `localStorage` ile saklayabilir.
- **Responsive Tasarım:** Mobil ve masaüstü cihazlar için optimize edilmiş arayüz.
- **Modern Teknolojiler:** React, TailwindCSS, React Query ve React Router ile geliştirildi.

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](https://github.com/user-attachments/assets/475ce780-b851-4431-9730-0b1cd262913f) 

### Egzersizler
![Egzersizler](https://github.com/user-attachments/assets/e984d539-8429-4beb-be64-9d4421069066)

### Favoriler Sayfası
![Favoriler]![image](https://github.com/user-attachments/assets/ba4e8bca-8a80-408c-acd0-cb2e855f8447)


## 🛠️ Teknolojiler

- **React:** Kullanıcı arayüzü için.
- **TailwindCSS:** Responsive ve modern stil için.
- **React Query:** Veri çekme, cache yönetimi ve yükleniyor/hata durumları için.
- **Formik & Yup:** Arama formu ve validasyon için.
- **React Router:** Sayfalar arası gezinme için.
- **ExerciseDB API:** Egzersiz verilerini sağlamak için.
- **TypeScript:** Tip güvenliği için 
- **localStorage:** Favorileri saklamak için.

## 📋 Gereksinimler

- Node.js (v16 veya üstü)
- npm veya yarn

## 🏁 Kurulum ve Çalıştırma

1. **Repoyu Klonla:**
   ```bash
   git clone https://github.com/hakan4773/ExcersizeDirectory-App.git
   cd ExcersizeDirectory
