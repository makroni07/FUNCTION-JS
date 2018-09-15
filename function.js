//tugas1
function shoutOut(){
	console.log("halo function");
}

console.log(shoutOut());


//tugas 2
function calculateMultiply(num1, num2) {
  return num1 * num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

//tugas 3
function processSentence(name, age, address, hobby){
	return ("Nama saya " +name+ " , umur saya " +age+ " , alamat saya di " +address+ " , dan saya punya hobby " +hobby);

}

var name = "Hamzah";
var age = 25;
var address = "Jln. Banguntapan, Yogjakarta";
var hobby = "PHOTOGRAPHER";


var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"