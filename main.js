// 1)Ədədin müsbət, mənfi və ya sıfır olmasını müəyyən edən
//  if-else if-else konstruksiyasını yaradın.

// let a = prompt("ededi daxil edin");
// if (a > 0) {
//     console.log("eded musbetdir");

// } else if (a < 0){
//     console.log("eded menfidir");

// } else{
//     console.log("eded 0-a beraberdir");

// }


// 2) Müəyyən bir istifadəçi roluna
//  (admin, istifadəçi, qonaq) əsaslanan müxtəlif mesajları
//  qaytaran keçid-case strukturunu yazın.
// let guess = prompt("Istifadecii rolunu daxil et")
// if (guess == "Admin") {
//     console.log("Hormetli Admin, xos gelmisiniz");

// } else if (guess == "User") {
//     console.log("Hormetli User, xos gelmisiniz"); 
// }else{
//     console.log("Horemetli qonaq, zehmet olmasa qeydiyyatdan kecin");

// }

// 3) Ədədin cüt və ya tək olduğunu müəyyən edən if-else 
// konstruksiyasını yazın.

// let number = prompt("ededi daxil edin")
// if (number %2 === 0) {
//     console.log("eded cutdur");

// } else {
//     console.log("eded tekdir");
// }


// 5) == və === operatorları arasındakı fərqi göstərən numune 
// yazın.

// let b = 10;
// let c = "10";
// console.log(b == c); //true
// console.log(b === c); //falce



// 6) !== operatorundan istifadə edərək ədədin 10-a bərabər olmadığını 
// yoxlayan ifadə yaradın.

// let d = 12;
// let f = 13;

// let result1 = d+f;
//  console.log( result1 !== 10);




//  7)Ədədin 5-dən böyük və 10-dan kiçik olmasını yoxlayan ifadə yazın. 
// let eded = prompt("ededi daxil edin")
//  if (eded > 5 && eded < 10) {
//     console.log("eded 5den boyukdur ve 10dan kicikdir");

//   }else{
//     console.log("eded 5den boyukdur ve 10dan kicik deyil");

//  }

// 8)Əgər varsa istifadəçi adı dəyişənini, əks halda
//  isə "Anonim"i qaytaran nullish coalescing  operatorundan 
// istifadə edin.

// let user = null;
// let result = user ?? "Anonim";

// console.log(result);

// 9)Boolean dəyərinin tərsini qaytaran ifadə yazın.

// let user = true;

// let admin = !user;
// console.log(admin);

// 10)Hər iki şərtin doğru olub olmadığını yoxlayan && ifadəsi yaradın.

// let a = 10+5;
// let b = 8+7;
// if (a = 15 && b==15){
//     console.log("her iki sert dogrudur");

// }else{
//     console.log("sertlerden biri ve ya hec biri dogru deyil");

// }

// 11) İki şərtdən ən azı birinin doğru olub olmadığını yoxlayan 

// let b = 9+3;
// let c = 9-3;
// if ( a==12 || b==12){
//     console.log("her ikisi ve ya biri beraberdir");

// }else{
//     "hec biri beraber deyil"
// }

// 12) Ədədin həm müsbət, həm də cüt olmasını yoxlayan ifadə yazın.
// let a = prompt("eded daxil edin")
// if (a > 0 && a % 2== 0) {
//     console.log("eded hem musbetdir, hem de cutdur");
//     }else{
//         console.log("eded musbet ve ya cut deyil");

//     }


// 13)İstifadəçi adı və parolun hər ikisinin etibarlı olub olmadığını yoxlayan if-else strukturunu yazın.
// let name = prompt("Enter your name")
// let password = prompt("Enter your password")
// let user = "Nermin"
// let parol = "nermin123"
// if (name == user && password == parol) {
//     console.log("Nermin xanim xos gelmisiniz");

// } else {
//     console.log("siz Nermin deyilsiniz");

// }

// 14)Ədədin mənfi və ya sıfır olduğunu yoxlayan və müvafiq olaraq mesajı qaytaran switch-case konstruksiyasını yazın.

// let number = prompt("eded daxil edin")
// switch (true) {
//     case number < 0 || number == 0:
//         console.log("eded menfi ve ya 0dir");

//         break;

//     default:
//         console.log("eded menfi ve ya 0 deyil");

//         break;
// }