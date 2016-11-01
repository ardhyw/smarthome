# Smarthome

Adalah community project XL-Labs, yang dimulai &mdash; mungkin &mdash; 2 tahun yang lalu.

Ini adalah project DIY smarthome menggunakan Arduino dan Raspberry Pi (Raspi).

## Cara Kerja

Arduino digunakan untuk interfacing antara Raspi dengan hardware &mdash; sensor dan relay.
Di dalamnya ada firmware firmata yang berkomunikasi dengan Raspi melalui interface serial.

Program javascript berjalan di dalam Raspi. Dia berfungsi untuk mendengarkan HTTP request
sebagai perintah untuk diteruskan ke Arduino.

Arduino bisa diperintah untuk ON/OFF relay.

**Contoh:**

URL `http://ip_address_raspi:3000/1/on` akan menyalakan relay no.1

URL `http://ip_address_raspi:3000/1/off` akan mematikan relay no.1

## Library

```
npm install -g firmata
npm install -g express
```
