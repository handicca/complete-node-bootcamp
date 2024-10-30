RESTful API adalah sebuah jenis arsitektur aplikasi web yang memanfaatkan prinsip REST (Representational State Transfer). REST adalah gaya arsitektur yang mendefinisikan serangkaian aturan untuk bagaimana sumber daya (resources) diakses dan dimanipulasi melalui HTTP (Hypertext Transfer Protocol). 

Berikut adalah beberapa karakteristik utama RESTful API:

1. **Stateless**: RESTful API bersifat stateless, artinya setiap permintaan dari klien ke server harus memuat semua informasi yang dibutuhkan untuk memahami dan memproses permintaan tersebut. Server tidak menyimpan status apapun dari klien di antara permintaan.

2. **Resource-based**: Dalam RESTful API, semua data dan fungsionalitas dianggap sebagai sumber daya (resources) yang dapat diidentifikasi oleh URI (Uniform Resource Identifier). Misalnya, data tentang pengguna mungkin diakses melalui URI seperti `/users/123`.

3. **HTTP Methods**: RESTful API menggunakan metode HTTP standar seperti:
   - **GET**: Untuk mengambil data dari server.
   - **POST**: Untuk mengirim data baru ke server.
   - **PUT**: Untuk memperbarui data yang ada di server.
   - **DELETE**: Untuk menghapus data dari server.

4. **Representasi**: Sumber daya dalam RESTful API dapat diwakili dalam berbagai format, seperti JSON (umumnya digunakan), XML, atau format lainnya. Klien dan server biasanya berkomunikasi menggunakan format ini.

5. **Uniform Interface**: RESTful API memiliki antarmuka yang seragam, yang memudahkan untuk memprediksi perilaku API. Ini termasuk URI yang mudah dipahami, standar HTTP, dan penggunaan status kode HTTP yang sesuai (misalnya, 200 untuk sukses, 404 untuk tidak ditemukan, dll.).

6. **Layered System**: RESTful API memungkinkan adanya lapisan-lapisan antara klien dan server (misalnya, load balancer, cache) tanpa memengaruhi cara kerja keseluruhan API.

RESTful API sangat populer karena kesederhanaan, fleksibilitas, dan kemampuannya untuk mendukung berbagai perangkat dan platform dalam mengakses sumber daya yang sama.
