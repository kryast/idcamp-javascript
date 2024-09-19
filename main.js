// TODO: buatlah variabel (konstan) bernama `currency` dan isi dengan nilai "IDR".
const currency = "IDR"
console.log(currency)
// TODO: buatlah variabel bernama `value` dan isi dengan nilai 10000.
let value = 10000
console.log(value)
// TODO: tambahkan nilai di dalam variabel `value` sebesar 5000.
value += 5000
console.log(value)

/**
 * TODO: buatlah variabel (konstan) bernama `money`,
 * isi dengan penambahan string dari nilai `currency` + " " + `value`.
 */
const money = `${currency} ${value}`
console.log(money)

/**
 * TODO:
 * 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
 * 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
 *    "Halo! Nama saya (name). Saya tinggal di (origin)."
 *
 *    Contoh: Jika `name` bernilai 'Fulan' dan `origin` bernilai 'Jakarta', fungsi harus mengembalikan:
 *    "Halo! Nama saya Fulan. Saya tinggal di Jakarta.".
 *
 * 3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".
 * 4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
 * 5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.
 */

function hello(name, origin = "Bandung") {
    let halo = "Halo! Nama saya " + name + ". " + "Saya tinggal di " + origin + ".";
    return halo;
  }
  let rahmat = hello("Rahmat", "Semarang");
  let indra = hello("Indra");
  
  console.log(rahmat);
  console.log(indra);