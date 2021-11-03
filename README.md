# Poolacpack Backend
backend using express and db mysql

# instalasi

copy environment variabel dengan perintah sebagai berikut : 
```bash
cp .env-sample .env
```

isi environment konfigurasi database mysql
```bash
NODE_ENV=development
APP_PORT=3000

DB_USER=
DB_PASS=
DB_NAME=
DB_HOST=
```

Install package
```sh
$ npm install
```

running aplikasi 
```sh
$ npm run dev
```

testing 
```sh
$ npm run test
```

Perintah Untuk Melakukan Generate Model
```
$ npx sequelize-cli model:generate --name Users --attributes username:string,fullname:string,email:string,password:string
```

Perintah Untuk Melakukan Migration Tabel
```sh
$ npx sequelize-cli db:migrate
```

