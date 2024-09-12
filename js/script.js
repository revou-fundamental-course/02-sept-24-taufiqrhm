function segitiga() {
    const userChoice = document.getElementById("user-choice");
    const inputValue = document.getElementById("input-value");
    const choice = userChoice.value; 
  
    if (choice === "luas-segitiga") {
      inputValue.innerHTML = `
              <label for="alas-segitiga">Alas Segitiga:</label><br>
              <input type="number" id="alas-segitiga" placeholder="Masukkan Nilai"><br>
              <label for="tinggi-segitiga">Tinggi Segitiga:</label><br>
              <input type="number" id="tinggi-segitiga" placeholder="Masukkan Nilai"><br>
              <div id="result-segitiga" class="result-luas-segitiga"></div>
              <div class="button-result">
                  <button onclick="hitungLuasSegitiga()">Hitung Luas Segitiga</button>
                  <button onclick="resetLuasSegitiga()">Reset</button>
              </div>
              
          `;
    } else if (choice === "keliling-segitiga") {
      inputValue.innerHTML = `
              <label for="sisi-segitiga-a">Sisi A:</label><br>
              <input type="number" id="sisi-segitiga-a" placeholder="Masukkan Nilai"><br>
              <label for="sisi-segitiga-b">Sisi B:</label><br>
              <input type="number" id="sisi-segitiga-b" placeholder="Masukkan Nilai"><br>
              <label for="sisi-segitiga-c">Sisi C:</label><br>
              <input type="number" id="sisi-segitiga-c" placeholder="Masukkan Nilai"><br>
              <div id="result-keliling-segitiga" class="result-keliling-segitiga"></div>
               <div class="button-result">
                  <button onclick="hitungKelilingSegitiga()">Hitung Keliling Segitiga</button>
                  <button onclick="resetKelilingSegitiga()">Reset</button>
              </div>
              
          `;
    }
  }
  function jajarGenjangOption() {
    const userChoice = document.getElementById("user-choice2");
    const inputValue = document.getElementById("input-value2");
    const choice = userChoice.value;
  
    if (choice === "luas-jajar-genjang") {
      inputValue.innerHTML = `
              <label for="alas-jajar-genjang">Alas Jajar Genjang:</label><br>
              <input type="number" id="alas-jajar-genjang" placeholder="Masukkan Nilai"><br>
              <label for="tinggi-jajar-genjang">Tinggi Jajar Genjang:</label><br>
              <input type="number" id="tinggi-jajar-genjang" placeholder="Masukkan Nilai"><br>
              <div id="result-luas-jager" class="result-luas-jager"></div>
              <div class="button-result">
                  <button onclick="hitungLuasJager()">Hitung Luas Jajar Genjang</button>
                  <button onclick="resetLuasJager()">Reset</button>
              </div>
          `;
    } else if (choice === "keliling-jajar-genjang") {
      inputValue.innerHTML = `
          <label for="sisi-jager-a">Sisi A:</label><br>
          <input type="number" id="sisi-jager-a" placeholder="Masukkan Nilai"><br>
          <label for="sisi-jager-b">Sisi B:</label><br>
          <input type="number" id="sisi-jager-b" placeholder="Masukkan Nilai"><br>
          <div id="result-keliling-jager" class="result-keliling-jager"></div>
          <div class="button-result">
              <button onclick="hitungKelilingJager()">Hitung Keliling Jajar Genjang</button>
              <button onclick="resetKelilingJager()">Reset</button>
          </div>
      `;
    }
  }
  
  //rumus luas segitiga
  function hitungLuasSegitiga() {
    const alas = parseInt(document.getElementById("alas-segitiga").value);
    const tinggi = parseInt(document.getElementById("tinggi-segitiga").value);
  
  
    if (isNaN(alas) || isNaN(tinggi) ||  alas <= 0 || tinggi <= 0) {
      alert(`anda belum memasukan nilai`)
      return;
  }
    const luas =  0.5 * alas * tinggi;
    document.getElementById("result-segitiga").innerText = `Hasil Luas Segitiga: ${luas}`;
  }
  
  function resetLuasSegitiga() {
    document.getElementById("alas-segitiga").value = '';
    document.getElementById("tinggi-segitiga").value = '';
    document.getElementById("result-segitiga").innerText = '';
  }
  
  //rumus keliling segitiga
  
  function hitungKelilingSegitiga() {
    const sisiA = parseInt(document.getElementById("sisi-segitiga-a").value);
    const sisiB = parseInt(document.getElementById("sisi-segitiga-b").value);
    const sisiC = parseInt(document.getElementById("sisi-segitiga-c").value);
  
  
    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
      alert(`anda belum memasukan nilai`)
      return;
  }
    const keliling = sisiA + sisiB + sisiC;
    document.getElementById("result-keliling-segitiga").innerText = `Hasil Keliling Segitiga: ${keliling}`;
  }
  
  function resetKelilingSegitiga() {
    document.getElementById("sisi-segitiga-a").value = '';
    document.getElementById("sisi-segitiga-b").value = '';
    document.getElementById("sisi-segitiga-c").value = '';
    document.getElementById("result-keliling-segitiga").innerText = '';
  }
  
  //rumus luas jajargenjang
  
  function hitungLuasJager() {
    const alasJager = parseInt(document.getElementById("alas-jajar-genjang").value);
    const tinggiJager = parseInt(document.getElementById("tinggi-jajar-genjang").value);
  
  
    if (isNaN(alasJager) || isNaN(tinggiJager) || alasJager <= 0 || tinggiJager <= 0) {
      alert(`anda belum memasukan nilai`)
      return;
  }
    const luas = alasJager * tinggiJager;
    document.getElementById("result-luas-jager").innerText = `Hasil Luas Jajar Genjang: ${luas}`;
  }
  
  function resetLuasJager() {
    document.getElementById("alas-jajar-genjang").value = '';
    document.getElementById("tinggi-jajar-genjang").value = '';
    document.getElementById("result-luas-jager").innerText = '';
  }
  
  //rumus keliling jajargenjang
  
  function hitungKelilingJager() {
    const sisiA = parseInt(document.getElementById("sisi-jager-a").value);
    const sisiB = parseInt(document.getElementById("sisi-jager-b").value);
  
  
    if (isNaN(sisiA) || isNaN(sisiB) || sisiA <= 0 || sisiB <= 0) {
      alert(`anda belum memasukan nilai`)
      return;
  }
    const luas = 2* (sisiA + sisiB);
    document.getElementById("result-keliling-jager").innerText = `Hasil Luas Jajar Genjang: ${luas}`;
  }
  
  function resetKelilingJager() {
    document.getElementById("sisi-jager-a").value = '';
    document.getElementById("sisi-jager-b").value = '';
    document.getElementById("result-keliling-jager").innerText = '';
  }
  
  // Inisialisasi konten formulir berdasarkan pilihan default
  segitiga();
  jajarGenjangOption();
  