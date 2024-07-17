// let isNgocHandsome = true;

// console.log(1 > 1);
// console.log(1 >= 1);
// console.log(1 == "1");
// console.log(1 !== 1);
// console.log(1 !== "1");
// console.log(1 > 1 && 1 == 1);

// // Branching Statement
// if (condition) {
//   //Do Something 01
// } else if (condition2) {
//   //Do Something 02
// } else if (condition3) {
//   //Do Something 03
// } else if (conditionN) {
//   //Do Something 04
// } else {
//   //Do Something else
// }

// let hour = +prompt("Mời bạn nhập vào số giờ trong ngày(VD:20");

// if (Number.isInteger(hour) === true && hour >= 0 && hour <= 24) {
//   if (hour < 10) {
//     console.log("Good Morning");
//   } else if (hour < 20) {
//     console.log("Good day");
//   } else {
//     console.log("Good Evening");
//   }
// } else {
//   console.log("Dữ liệu không hợp lệ");
// }

// let month = +prompt("Mời bạn nhập vào tháng trong năm");

// if (Number.isInteger(month) === true && month > 0 && month <= 12) {
//   if (month >= 1 && month <= 3) {
//     console.log("Mùa xuân");
//   } else if (month >= 4 && month <= 6) {
//     console.log("Mùa hè");
//   } else if (month >= 7 && month <= 9) {
//     console.log("Mùa thu");
//   } else {
//     console.log("Mùa đông");
//   }
// } else {
//   console.log("Dữ liệu không hợp lệ");
// }

//
//   // SWITCH/CASE
//   switch (month) {
//     case 1:
//     case 2:
//     case 3:
//       console.log("Mùa xuân quý I");
//       break;

//     case 4:
//     case 5:
//     case 6:
//       console.log("Mùa hè quý II");
//       break;
//     case 7:
//     case 8:
//     case 9:
//       console.log("Mùa hè quý III");
//     default:
//       console.log("Mùa Đông");
//       break;
//   }
// }

// console.log(0 == false); //O có tính chất Falsy
// console.log(1 == true); //true-> 1 có tính chất truethy

// console.log("" == false);

// // có những giá trị falsy bao gồm:
// // false;
// // 0;
// // ("");
// // undefined;
// // null;
// // NaN;

// console.log(1 == undefined);
// for (let i = 1; i <= 10; i = i + 2) {
//   //Bộ 3 điều kiện lặp trong (Biến chạy thông thường là i,j,k)
//   //Lần lặp số 1: i=1, 1<=5(true), TÁC VỤ "7h-24h", i=i+1(2)
//   //Lần lặp số 2: i=2, 2<=5(true), TÁC VỤ "7h-24h", i=i+1(3)
//   //......
//   //Lần lặp sô 6: i=6, 6<=5(False), DỪNG TÁC VỤ
//   console.log(`LẦN LẶP THỨ ${i}`);
//   console.log("7h: Đánh răng, rửa mặt");
//   console.log("8h:  đi học");
//   console.log("12h: ăn trưa");
//   console.log("13h: học tiếp");
//   console.log("17h: đi về");
//   console.log("19h: ăn tối");
//   console.log("21h: học bài");
//   console.log("24h: đi ngủ");
// }

//A=1+2+3+...+n
// let n = +prompt("Bạn hãy nhập vào sô:");
// let A = 0;
// for (let i = 1; i <= n; i++) {
//   A = A + i;
// }
// console.log(A);

//B= 1^2 +2^2 +3^2+....+n^2
// let n = +prompt("Bạn hãy nhập vào số:");
// let B = 0;
// for (let i = 1; i <= n; i++) {
//   B = B + i ** 2;
// }
// console.log(B);

// C=1/1.2 + 1/2.3 + 1/3.4+...+ 1/(n-1).n
// let N = +prompt("Bạn hãy nhập số N:");
// let C = 0;
// for (let i = 1; i <= N - 1; i++) {
//   C = C + 1 / (i * (i + 1));
// }
// console.log(C);

// //BÀI I
// let a = +prompt("Nhập vào số a=");
// let b = +prompt("Nhập vào số b");

// if (a % b == 0) {
//   console.log(`Số ${a} chia hết cho ${b}`);
// } else {
//   console.log(`Số ${a} không chia hết cho ${b} `);
// }

// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
// let age=+prompt("Nhập tuổi của học sinh A:");
// if (Number.isInteger(age) === true && age > 0) {
//     if( age<16){
//         console.log(`Học sinh A năm nay ${a} tuôỉ không đủ đủ điều kiện vào học lớp 10`);
//     }else{
//         console.log("Đủ điều kiện vào lớp 10");
//     }
// }else{
//     console.log("Nhập vào không đúng");
// }

// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// let number = +prompt("Nhập số nguyên bất kì");
// if (Number.isInteger(number) === true && number !== 0) {
//   if (number > 0) {
//     console.log(`Số ${number} lớn hơn 0 `);
//   } else {
//     console.log(`Số ${number} nhỏ hơn 0`);
//   }
// }else{console.log("Mời bạn nhập lại số nguyên")
// }

// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// let soNguyenA = +prompt("Nhập vào số nguyên thứ nhất:");
// let soNguyenB = +prompt("Nhập vào số nguyên thứ hai:");
// let soNguyenC = +prompt("Nhập vào số nguyên thứ ba:");

// if (Number.isInteger(soNguyenA && soNguyenB && soNguyenC) === true) {
//   if (soNguyenA > soNguyenB && soNguyenA > soNguyenC) {
//     console.log(`Số lớn nhất là ${soNguyenA}`);
//   } else if (soNguyenB > soNguyenA && soNguyenB > soNguyenC) {
//     console.log(`Số lớn nhất là ${soNguyenB}`);
//   } else {
//     console.log(`Số lớn nhất là ${soNguyenC}`);
//   }
// }

// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// let diemBaiKtra=+prompt("Điểm kiểm tra 15 phút là:");
// let diemGiuaKi=+prompt("Điểm thi giữa kì là:");
// let diemCuoiKy=+prompt("Điểm thi cuối kỳ");

// Luyện tập vòng lặp 01
// // Bài 1:
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i === 99) {
//     console.log("Đã hoàn thành đếm đến 99!");
//   }
// }

// // Bài2:
// let temperature = +prompt("Vui lòng nhập nhiệt độ hiện tại:");

// // Kiểm tra nhiệt độ và hiển thị thông báo tương ứng
// if (temperature > 100) {
//   console.log(`Nhiệt độ quá cao! Vui lòng giảm nhiệt độ.`);
// } else if (temperature < 20) {
//   console.log(`Nhiệt độ quá thấp! Vui lòng tăng nhiệt độ.`);
// } else {
//   alert(`Nhiệt độ hiện tại là: ${temperature} +  độ C.`);
// }

// // Bài 3:
// let fib1 = 0;
// let fib2 = 1;
// let fibNext;
// for (let i = 0; i < 18; i++) {
//   fibNext = fib1 + fib2;
//   console.log(fib1, fib2, fibNext);
//   fib1 = fib2;
//   fib2 = fibNext;
// }

// Bài 4:
// let fib1 = 0;
// let fib2 = 1;
// let fibNext;
// for (let i = 0; i < 18; i++) {
//   fibNext = fib1 + fib2;
//   fib1 = fib2;
//   fib2 = fibNext;
//   if (fibNext % 5 == 0) {
//     console.log(`${fibNext} là số đầu tiên chia hết cho 5`);
//     break;
//   }
// }

// Bài 5
// let fib1 = 0;
// let fib2 = 1;
// let fibNext;
// let sum = 1;
// for (let i = 0; i < 18; i++) {
//   fibNext = fib1 + fib2;
//   fib1 = fib2;
//   fib2 = fibNext;
//   sum = sum + fibNext;
// }
// console.log(sum);

// // Bài 6:
// let sum = 0;
// let dem = 0;

// for (let i = 0; dem <= 30; i++) {
//   if (i % 7 == 0) {
//     sum = sum + i;
//     dem = dem + 1;
//   }
// }
// console.log(sum);
// console.log(sum);

// for (i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   }
// }else{
//     console.log(i);
// }

//BÀI SINH BẢNG CỬU CHƯƠNGlog

// for (let j = 1; j <= 10; j++) {
//   console.log("----------");
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${j}*${i}=${j * i}`);
//   }
// }

//
// let n = +prompt("Mời bạn nhập vào số tự nhiên N(2-100");

// // Numer.isNaN : Kiểm tra xem có phải là không là số  hay không?
// // Number.isNaN("a")// true
// // Number.isNaN(1.2)//false

// if (Number.isInteger(n) && n >= 2 && n <= 100) {
//      for (let i = 2; i <= n; i++) {
//         // Cách 2: for (let i = 2; i <= n; i=i+2)

//     if (i % 2 == 0) {
//       console.log(`Bình phương của ${i}=${i ** 2}`);
//     }
//   }
// } else {
//   console.log("Đồ Ngốc");
// }

// Tạo ra 10 dòng có màu ngẫu nhiên
// for (let i = 1; i <= 10; i = i + 1) {
//   let red = Math.floor(Math.random() * 256); //0- 255.99999999999// Math.random -> có giá trị từ 0-0.9999999999999
//   let blue = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   console.log(
//     "%c Xin chao, tôi tên là ...",
//     `background-color: blue ;color:rgb(${red}, ${blue}, ${green}`
//   );
// }

// SỐ NGUYÊN TỐ
// let N = +prompt("Nhập vào số N=");
// let check = true;

// for (let i = 2; i < N; i++) {
//   if (N % i == 0) {
//     check = false;
//     break;
//   }
// }

// if (check) {
//   console.log("Đây là số nguyên tố");
// } else {
//   console.log("Đây không phải là số nguyên tố");
// }

// } else {
//   console.log(`${N} không phải là số nguyên tố`);
// }

// let N = +prompt("Nhập vào số N=");
// let dem = 0;
// let k = 0;
// let A=0;
// for (let i = 5; i < A; i += 6) {
//   if (A % i === 0 || num % (i + 2) === 0)
//   }
// SỐ HOÀN HẢO
// let N = +prompt("Nhập vào một số bất kỳ:");
// let sum = 0;
// for (i = 1; i < N; i++) {
//   if (N % i == 0) {
//     sum = sum + i;
//   }
// }
// if (sum == N && N!==0) {
//   console.log("Đây là số hoàn hảo");
// } else {
//   console.log("Đây không phải là số hoàn hảo");
// }

//CHo người dùng nhập vào số N(1-100)
//Tạo sẵn biến result=17

//Tiến hành kiểm tra
//Nếu có n< result ==>" Too Small!!"
//Nếu có n> result ==>" Too Big!!"
//Nếu có n== result ==>" Too BingGo!!"

// let N = +prompt("Nhập vào số N từ 1-100");
// let result = 17;
// if (N >= 1 && N <= 100) {
//   if (N < result) {
//     console.log("Too Small");
//   } else if (N > result) {
//     console.log("Too Big");
//   } else {
//     console.log("Too BingGo");
//   }
// } else {
//   console.log("Mời bạn nhập lại số từ 1-100");
// }

// let result = 17;
// let loop = true;
// let N = +prompt("Nhập vào số N từ 1-100");
// while (N !== result) {
//   if (N < result) {
//     console.log("Too Small");
//   } else if (N > result) {
//     console.log("Too Big");
//   }
//     //ĐÂY LÀ NƠI VÒNG LẶP DỪNG LẠI
//     N = +prompt("Nhập vào số N từ 1-100");
//   }
// console.log("BingGo");

// do {
//   console.log("Hello world");
//   //something
// } while (1 != 1);

// // Hiển thị 20 số đầu tiên trong dãy FIBONACCI
// let fib1 = 0;
// let fib2 = 1;

// for (i = 1; i <= 18; i++) {
//   let fibNext = fib1 + fib2;
//   fib1 = fib2;
//   fib2 = fibNext;
//   console.log(fibNext);
// }

//Tìm số đầu tiên trong dãy Fib chia hết cho 5
// let fib1 = 0;
// let fib2 = 1;
// let dem = 0;
// for (i = 1; i <= 18; i++) {
//   let fibNext = fib1 + fib2;
//   fib1 = fib2;
//   fib2 = fibNext;

//   if (fibNext % 5 == 0) {
//     dem = dem + 1;

//     if (dem == 3) {
//       console.log(fibNext);
//     }
//   }
// }

// let N = +prompt("Mời bạn nhập vào số nguyên N bất kì");
// for (let i = 1; i <= N; i++) {
//   console.log(i);
// }
// Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// let fib1 = 0;
// let fib2 = 1;
// let sum = 0;
// for (i = 1; i <= 18; i++) {
//   let fibNext = fib1 + fib2;
//   fib1 = fib2;
//   fib2 = fibNext;
//   sum = sum + fibNext;
// }
// console.log(sum);

// let a = [1, 2, 3, 4];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] == 3) {
//     continue;
//   }
//   console.log(a[i]);
// }

// let sum = 0;
// let dem = 0;
// for (i = 1; dem <= 30; i++) {
//   if (i % 7 == 0) {
//     sum = sum + i;
//     dem = dem + 1;
//   }
// }
// console.log(sum);

// let A = [1, 2, 3, 4, 5, 6, 7, 8];
// let vitri = 0;
// for (let i = 0; i < A.length / 2; i++) {
//   let j = A.length - 1 - i;
//   vitri = A[i];
//   A[i] = A[j];
//   A[j] = vitri;
// }

// console.log(A);

//
// let A = [-3, -5, 5, 1, 2, 4];
// let vitri = 0;
// for (let i = 0; i < A.length - 1; i++) {
//   for (let j = i + 1; j < A.length; j++) {
//     if (A[i] > A[j]) {
//       vitri = A[i];
//       A[i] = A[j];
//       A[j] = vitri;
//     }
//   }
// }
// console.log(A);

// let sum = "";
// for (let i = 1; i <= 5; i++) {
//   sum = sum + "*";
//   console.log(sum);
// }

// let sum = "";
// for (let i = 5; i >= 1; i--) {
//   sum = sum + "*".repeat(i) + "\n";
// }
// console.log(sum);

// let sum = "";
// for (let i = 1; i <= 5; i++) {
//   sum = sum + " ".repeat(5 - i) + "*".repeat(i) + "\n";
// }
// console.log(sum);

// let sum = "";
// for (let i = 5; i >= 1; i--) {
//   sum = sum + " ".repeat(5 - i) + "*".repeat(i) + "\n";
// }
// console.log(sum);

// let N = +prompt("Nhập vào số N=");
// let dem = 0;
// let check = true;

// for (i = 3; dem <= N; i++) {
//   for (j = 2; j < i; j++) {
//     if (i % j == 0) {
//       check = false;

//       break;
//     }
//   }

//   if (!check) {
//     console.log(i);
//     dem = dem + 1;
//   }
// }

// let num = 0;
// let dem = 0;
// let eNumbers = "";
// for (let i = 1; i <= 100; i++) {
//   for (num = i; num >= 1; num--) {
//     if (i % num == 0) {
//       dem = dem + 1;
//     }
//   }
//   if (dem == 2) {
//     eNumbers = eNumbers + i + " ";
//   }
// }
// console.log(` số nguyên tố đầu tiên là:`);
// console.log(eNumbers);

// let N = +prompt("Nhập vào số N=");
// let primes = [];

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
//   if (num % 2 === 0 || num % 3 === 0) return false;
//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//   }
//   return true;
// }

// for (let i = 0; i <= N; i++) {
//   if (isPrime(i)) {
//     primes.push(i);
//   }
// }

// console.log(`Các số nguyên tố từ 0 đến ${N}:`);
// console.log(primes.join(", "));

// let N = +prompt("Nhập vào số N=");
// let check = true;
// for (let i = 2; i < N; i++) {
//   if (N % i == 0) {
//     check = false;
//     break;
//   }
// }
// if (check) {
//   console.log("Đây là số nguyên tố");
// } else {
//   console.log("Đây không phải là số nguyên tố");
// }
// } else {
//   console.log(`${N} không phải là số nguyên tố`);
// }
