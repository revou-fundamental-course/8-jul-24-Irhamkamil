// ini js

const form = document.querySelector(".form-left");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //deklarasi
  const inputBeratBadan = document.getElementById("selection-bb").value;
  const inputTinggi = document.getElementById("selection-t").value;

  // mengalikan 0.01 dan mempangkat 2
  const hasilTinggi = (inputTinggi * 0.01) ** 2;

  // hasil akhir
  const hasilAkhir = (inputBeratBadan / hasilTinggi).toFixed(1);

  // pengkondisian untuk menampilkan nilai
  if (hasilAkhir < 18.5) {
    // header result
    const headerResult = document.querySelectorAll(".result .result_content");
    headerResult[0].innerHTML = "Berat Badan Kurang";
    // content result
    const contentResult = document.querySelectorAll(".result .hasil");
    contentResult[0].innerHTML = hasilAkhir;
    // footer result
    const footerResult = document.querySelectorAll(".result .result_content");
    footerResult[2].innerHTML = "Anda Memiliki Berat Badan Kurang";
  } else if (hasilAkhir >= 18.5 && hasilAkhir <= 24.9) {
    // header result
    const headerResult = document.querySelectorAll(".result .result_content");
    headerResult[0].innerHTML = "Berat Badan Normal";
    // content result
    const contentResult = document.querySelectorAll(".result .hasil");
    contentResult[0].innerHTML = hasilAkhir;
    // footer result
    const footerResult = document.querySelectorAll(".result .result_content");
    footerResult[2].innerHTML = "Anda Memiliki Berat Badan Normal";
  } else if (hasilAkhir > 25.0 && hasilAkhir <= 29.9) {
    // header result
    const headerResult = document.querySelectorAll(".result .result_content");
    headerResult[0].innerHTML = "Berat Badan Gemuk";
    // content result
    const contentResult = document.querySelectorAll(".result .hasil");
    contentResult[0].innerHTML = hasilAkhir;
    // footer result
    const footerResult = document.querySelectorAll(".result .result_content");
    footerResult[2].innerHTML = "Anda Memiliki Berat Badan Gemuk";
  } else if (hasilAkhir > 30.0) {
    // header result
    const headerResult = document.querySelectorAll(".result .result_content");
    headerResult[0].innerHTML = "Berat Badan Obesitas";
    // content result
    const contentResult = document.querySelectorAll(".result .hasil");
    contentResult[0].innerHTML = hasilAkhir;
    // footer result
    const footerResult = document.querySelectorAll(".result .result_content");
    footerResult[2].innerHTML = "Anda Memiliki Berat Badan Obesitas";
  } else {
    console.error("maaf salah");
  }
});

// const headerResult = document.querySelectorAll(".result .result_content");
// console.log(headerResult[0]);
