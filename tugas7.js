var tinggi = [135,140,145,150,155,160,165,170,175,180];
for (var i = 0; i < tinggi.length; i++) {
  console.log(tinggi[i]); // pada consle.log nya harus menambhakan index dan isi dari index yang tersimpan pada variable i
}
console.log("");
for (var cm of tinggi) {
  console.log(cm); // setiap perulangan tersimpan pada variabel cm dan tidak perlu menambahkan index dari array
}
