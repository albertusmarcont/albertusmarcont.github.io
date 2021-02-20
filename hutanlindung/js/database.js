const endpoint_url = 'http://srv4.pweb201.local/api';

document.addEventListener("DOMContentLoaded", function(){
  getPenjahit();
  getPenulis();
  getPelanggan();
  getKain();
  getHutan();
});

function getPenjahit(nama) {
  fetch(endpoint_url+ "/penjahits/penjahitdetail"+"?nama="+ nama)
  .then(status)
  .then(json)
  .then(function(data){
    var penjahitHTML = "";
    data.penjahitDetail.forEach(function(penjahit){
      penjahitHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="penjahit.html?nama=${penjahit.nama}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${penjahit.image}"/>
              </div>
            </a>
          </div>
        </div>

        <div class="col m7 s12">
  <table class="data">
  <thead>
    <tr>
        <th>Nama</th>
        <td class="grey-text text-darken-2">${penjahit.nama}</td>
    </tr>
    <tr>
    <th>Umur</th>
      <td class="grey-text text-darken-2">${penjahit.umur} tahun</td>
    </tr>
    <tr>
      <th>Alamat</th>
      <td class="grey-text text-darken-2">${penjahit.alamat}</td>
    </tr>
    <tr>
      <th>No. Telp</th>
      <td class="grey-text text-darken-2"> ${penjahit.no_hp}</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
        `;

        $("#section_title").html( "Tentang Penjahit" );
    });
        document.getElementById("penjahit").innerHTML = penjahitHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getPenulis(nama) {
  fetch(endpoint_url+ "/penuliss/penulisdetail"+"?nama="+ nama)
  .then(status)
  .then(json)
  .then(function(data){
    var biopenulisHTML = "";
    data.penulisDetail.forEach(function(penulis){
      biopenulisHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="biopenulis.html?nama=${penulis.nama}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${penulis.image}"/>
              </div>
            </a>
          </div>
        </div>

        <div class="col m7 s12">
  <table class="data">
  <thead>
    <tr>
        <th>Nama</th>
        <td class="grey-text text-darken-2">${penulis.nama}</td>
    </tr>
    <tr>
    <th>Umur</th>
      <td class="grey-text text-darken-2">${penulis.umur} tahun</td>
    </tr>
    <tr>
      <th>Alamat</th>
      <td class="grey-text text-darken-2">${penulis.alamat}</td>
    </tr>
    <tr>
      <th>No. Telp</th>
      <td class="grey-text text-darken-2"> ${penulis.no_hp}</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
        `;

        $("#section_title").html( "Tentang Penjahit" );
    });
        document.getElementById("biopenulis").innerHTML = biopenulisHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getPelanggan() {
  fetch(endpoint_url + "/pelanggans/pelanggandetail")
  .then(status)
  .then(json)
  .then(function(data){
    var pelanggansHTML = "";
    data.pelangganDetail.forEach(function(pelanggan){
      pelanggansHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detailpelanggan.html?id_pelanggan=${pelanggan.id_pelanggan}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${pelanggan.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <a href="detailpelanggan.html?id_pelanggan=${pelanggan.id_pelanggan}" class="data">${pelanggan.nama}</a>
            </div>
          </div>
        </div>
        `;

        $("#section_title").html( "Pelanggan" );
    });
        document.getElementById("pelanggans").innerHTML = pelanggansHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getPelangganDetail(id_pelanggan) {
  fetch(endpoint_url+ "/pelanggans/pelanggandetail"+"?id_pelanggan="+ id_pelanggan)
  .then(status)
  .then(json)
  .then(function(data){
    var pelanggansHTML = "";
    data.pelangganDetail.forEach(function(pelanggan){
      pelanggansHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detailpelanggan.html?id_pelanggan=${pelanggan.id_pelanggan}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${pelanggan.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <h5 class="data"><strong>${pelanggan.nama}</strong></h5>
            </div>
          </div>
        </div>

        <div class="col m7 s12">
  <table class="data">
  <thead>
    <tr>
        <th>ID Pelanggan</th>
        <td class="grey-text text-darken-2">${pelanggan.id_pelanggan}</td>
    </tr>
    <tr>
    <th>Nama Pelanggan</th>
      <td class="grey-text text-darken-2">${pelanggan.nama}</td>
    </tr>
    <tr>
      <th>Umur</th>
      <td class="grey-text text-darken-2">${pelanggan.umur} tahun</td>
    </tr>
    <tr>
      <th>Alamat</th>
      <td class="grey-text text-darken-2"> ${pelanggan.alamat}</td>
    </tr>
    <tr>
      <th>Model Yang Pernah Digunakan</th>
      <td class="grey-text text-darken-2"> ${pelanggan.model}</td>
    </tr>
    <tr>
      <th>Kontak</th>
      <td class="grey-text text-darken-2"> ${pelanggan.no_hp}</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
        `;

        $("#section_title").html( "Pelanggan" );
    });
        document.getElementById("detailpelanggan").innerHTML = pelanggansHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getDress() {
  fetch(endpoint_url + "/dress/dressdetail")
  .then(status)
  .then(json)
  .then(function(data){
    var dresslistHTML = "";
    data.dressDetail.forEach(function(model_dress){
      dresslistHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detaildress.html?id_model=${model_dress.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${model_dress.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <a href="detaildress.html?id_model=${model_dress.id_model}" class="data">${model_dress.nama}</a>
            </div>
          </div>
        </div>
        `;

        $("#section_title").html( "Rekomendasi Model - Model Dress" );
    });
        document.getElementById("dresslist").innerHTML = dresslistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getDressDetail(id_model) {
  fetch(endpoint_url+ "/dress/dressdetail"+"?id_model="+ id_model)
  .then(status)
  .then(json)
  .then(function(data){
    var dresslistHTML = "";
    data.dressDetail.forEach(function(model_dress){
      dresslistHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detaildress.html?id_model=${model_dress.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${model_dress.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <h5 class="data"><strong>${model_dress.nama}</strong></h5>
            </div>
          </div>
        </div>

        <div class="col m7 s12">
        <table class="data">
        <thead>
          <tr>
              <th>ID Model</th>
              <td class="grey-text text-darken-2">${model_dress.id_model}</td>
          </tr>
          <tr>
          <th>Nama Model</th>
            <td class="grey-text text-darken-2">${model_dress.nama}</td>
          </tr>
          <tr>
            <th>Nama Kain yang Digunakan</th>
            <td class="grey-text text-darken-2">${model_dress.nama_kain}</td>
          </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
        <div class="col m12 s12" style="border:2px;">
          <h5 class="data">Keterangan</h5>
          <p>${model_dress.keterangan}</p>
        </div>
        <br>
        <a href="kainlist.html"><input class="btn block judul darken-4 tombol" type="button" value="Lihat Rekomendasi Kain"></a>
        `;

        $("#section_title").html( "Rekomendasi Model - Model Dress" );
    });
        document.getElementById("detaildress").innerHTML = dresslistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getBlouse() {
  fetch(endpoint_url + "/blouse/blousedetail")
  .then(status)
  .then(json)
  .then(function(data){
    var blouselistHTML = "";
    data.blouseDetail.forEach(function(model_blouse){
      blouselistHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detailblouse.html?id_model=${model_blouse.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${model_blouse.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <a href="detailblouse.html?id_model=${model_blouse.id_model}" class="data">${model_blouse.nama}</a>
            </div>
          </div>
        </div>
        `;

        $("#section_title").html( "Rekomendasi Model - Model Blouse" );
    });
        document.getElementById("blouselist").innerHTML = blouselistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getBlouseDetail(id_model) {
  fetch(endpoint_url+ "/blouse/blousedetail"+"?id_model="+ id_model)
  .then(status)
  .then(json)
  .then(function(data){
    var blouselistHTML = "";
    data.blouseDetail.forEach(function(model_blouse){
      blouselistHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detailblouse.html?id_model=${model_blouse.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${model_blouse.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <h5 class="data"><strong>${model_blouse.nama}</strong></h5>
            </div>
          </div>
        </div>

        <div class="col m7 s12">
  <table class="data">
  <thead>
    <tr>
        <th>ID Model</th>
        <td class="grey-text text-darken-2">${model_blouse.id_model}</td>
    </tr>
    <tr>
    <th>Nama Model</th>
      <td class="grey-text text-darken-2">${model_blouse.nama}</td>
    </tr>
    <tr>
      <th>Nama Kain yang Digunakan</th>
      <td class="grey-text text-darken-2">${model_blouse.nama_kain}</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  <div class="col m12 s12" style="border:2px;">
  <h5 class="data">Keterangan</h5>
  <p>${model_blouse.keterangan}</p>
  </div>
  <br>
  <a href="kainlist.html"><input class="btn block judul darken-4 tombol" type="button" value="Lihat Rekomendasi Kain"></a>
  `;

        $("#section_title").html( "Rekomendasi Model - Model Blouse" );
    });
        document.getElementById("detailblouse").innerHTML = blouselistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getRok() {
  fetch(endpoint_url + "/rok/rokdetail")
  .then(status)
  .then(json)
  .then(function(data){
    var roklistHTML = "";
    data.rokDetail.forEach(function(model_rok){
      roklistHTML += `
        <div class = "col m4 s6">
          <div class = "card">
            <a href="detailrok.html?id_model=${model_rok.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${model_rok.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <a href="detailrok.html?id_model=${model_rok.id_model}" class="data">${model_rok.nama}</a>
            </div>
          </div>
        </div>
        `;

        $("#section_title").html( "Rekomendasi Model - Model Rok" );
    });
        document.getElementById("roklist").innerHTML = roklistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getRokDetail(id_model) {
  fetch(endpoint_url+ "/rok/rokdetail"+"?id_model="+ id_model)
  .then(status)
  .then(json)
  .then(function(data){
    var roklistHTML = "";
    data.rokDetail.forEach(function(model_rok){
      roklistHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detailrok.html?id_model=${model_rok.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${model_rok.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <h5 class="data"><strong>${model_rok.nama}</strong></h5>
            </div>
          </div>
        </div>

        <div class="col m7 s12">
  <table class="data">
  <thead>
    <tr>
        <th>ID Model</th>
        <td class="grey-text text-darken-2">${model_rok.id_model}</td>
    </tr>
    <tr>
    <th>Nama Model</th>
      <td class="grey-text text-darken-2">${model_rok.nama}</td>
    </tr>
    <tr>
      <th>Nama Kain yang Digunakan</th>
      <td class="grey-text text-darken-2">${model_rok.nama_kain}</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  <div class="col m12 s12" style="border:2px;">
  <h5 class="data">Keterangan</h5>
  <p>${model_rok.keterangan}</p>
  </div>
  <br>
  <a href="kainlist.html"><input class="btn block judul darken-4 tombol"
  type="button" value="Lihat Rekomendasi Kain"></a>
        `;

        $("#section_title").html( "Rekomendasi Model - Model Rok" );
    });
        document.getElementById("detailrok").innerHTML = roklistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getKebaya() {
  fetch(endpoint_url + "/kebaya/kebayadetail")
  .then(status)
  .then(json)
  .then(function(data){
    var kebayalistHTML = "";
    data.kebayaDetail.forEach(function(model_kebaya){
      kebayalistHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detailkebaya.html?id_model=${model_kebaya.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${model_kebaya.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <a href="detailkebaya.html?id_model=${model_kebaya.id_model}" class="data">${model_kebaya.nama}</a>
            </div>
          </div>
        </div>
        `;

        $("#section_title").html( "Rekomendasi Model - Model Kebaya" );
    });
        document.getElementById("kebayalist").innerHTML = kebayalistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getKebayaDetail(id_model) {
  fetch(endpoint_url+ "/kebaya/kebayadetail"+"?id_model="+ id_model)
  .then(status)
  .then(json)
  .then(function(data){
    var kebayalistHTML = "";
    data.kebayaDetail.forEach(function(model_kebaya){
      kebayalistHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detailkebaya.html?id_model=${model_kebaya.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${model_kebaya.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <h5 class="data"><strong>${model_kebaya.nama}</strong></h5>
            </div>
          </div>
        </div>

        <div class="col m7 s12">
  <table class="data">
  <thead>
    <tr>
        <th>ID Model</th>
        <td class="grey-text text-darken-2">${model_kebaya.id_model}</td>
    </tr>
    <tr>
    <th>Nama Model</th>
      <td class="grey-text text-darken-2">${model_kebaya.nama}</td>
    </tr>
    <tr>
      <th>Nama Kain yang Digunakan</th>
      <td class="grey-text text-darken-2">${model_kebaya.nama_kain}</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
<div class="col m12 s12" style="border:2px;">
  <h5 class="data">Keterangan</h5>
  <p>${model_kebaya.keterangan}</p>
</div>
<br>
<a href="kainlist.html"><input class="btn block judul darken-4 tombol" type="button" value="Lihat Rekomendasi Kain"></a>
        `;

        $("#section_title").html( "Rekomendasi Model - Model Kebaya" );
    });
        document.getElementById("detailkebaya").innerHTML = kebayalistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getGaun() {
  fetch(endpoint_url + "/gaun/gaundetail")
  .then(status)
  .then(json)
  .then(function(data){
    var gaunlistHTML = "";
    data.gaunDetail.forEach(function(model_gaun){
      gaunlistHTML += `
        <div class = "col m4 s6">
          <div class = "card">
            <a href="detailgaun.html?id_model=${model_gaun.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${model_gaun.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <a href="detailgaun.html?id_model=${model_gaun.id_model}" class="data">${model_gaun.nama}</a>
            </div>
          </div>
        </div>
        `;

        $("#section_title").html( "Rekomendasi Model - Model Gaun" );
    });
        document.getElementById("gaunlist").innerHTML = gaunlistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getGaunDetail(id_model) {
  fetch(endpoint_url+ "/gaun/gaundetail"+"?id_model="+ id_model)
  .then(status)
  .then(json)
  .then(function(data){
    var gaunlistHTML = "";
    data.gaunDetail.forEach(function(model_gaun){
      gaunlistHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detailgaun.html?id_model=${model_gaun.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${model_gaun.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <h5 class="data"><strong>${model_gaun.nama}</strong></h5>
            </div>
          </div>
        </div>

        <div class="col m7 s12">
  <table class="data">
  <thead>
    <tr>
        <th>ID Model</th>
        <td class="grey-text text-darken-2">${model_gaun.id_model}</td>
    </tr>
    <tr>
    <th>Nama Model</th>
      <td class="grey-text text-darken-2">${model_gaun.nama}</td>
    </tr>
    <tr>
      <th>Nama Kain yang Digunakan</th>
      <td class="grey-text text-darken-2">${model_gaun.nama_kain}</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
<div class="col m12 s12" style="border:2px;">
  <h5 class="data">Keterangan</h5>
  <p>${model_gaun.keterangan}</p>
</div>
<br>
<a href="kainlist.html"><input class="btn block judul darken-4 tombol" type="button" value="Lihat Rekomendasi Kain"></a>

        `;

        $("#section_title").html( "Rekomendasi Model - Model Gaun" );
    });
        document.getElementById("detailgaun").innerHTML = gaunlistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getKain() {
  fetch(endpoint_url + "/kains/kaindetail")
  .then(status)
  .then(json)
  .then(function(data){
    var kainlistHTML = "";
    data.kainDetail.forEach(function(kain){
      kainlistHTML += `
        <div class = "col m4 s6">
          <div class = "card">
            <a href="detailkain.html?id_kain=${kain.id_kain}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${kain.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <a href="detailkain.html?id_kain=${kain.id_kain}" class="data">${kain.nama}</a>
            </div>
          </div>
        </div>

        `;

        $("#section_title").html( "Rekomendasi Kain" );
    });
        document.getElementById("kainlist").innerHTML = kainlistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getKainDetail(id_kain) {
  fetch(endpoint_url+ "/kains/kaindetail"+"?id_kain="+ id_kain)
  .then(status)
  .then(json)
  .then(function(data){
    var kainlistHTML = "";
    data.kainDetail.forEach(function(kain){
      kainlistHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detailkain.html?id_kain=${kain.id_model}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${kain.image}"/>
              </div>
            </a>
            <div class="card-content center">
            <h5 class="data"><strong>${kain.nama}</strong></h5>
            </div>
          </div>
        </div>

        <div class="col m7 s12">
  <table class="data">
  <thead>
    <tr>
        <th>ID Kain</th>
        <td class="grey-text text-darken-2">${kain.id_kain}</td>
    </tr>
    <tr>
    <th>Nama Kain</th>
      <td class="grey-text text-darken-2">${kain.nama}</td>
    </tr>
    <tr>
      <th>Range Harga</th>
      <td class="grey-text text-darken-2">${kain.range_harga}</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
<div class="col m12 s12" style="border:2px;">
  <h5 class="data">Keterangan</h5>
  <p>${kain.keterangan}</p>
</div>
        `;

        $("#section_title").html( "Rekomendasi Kain" );
    });
        document.getElementById("detailkain").innerHTML = kainlistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getHutan() {
  fetch(endpoint_url + "/hutan/hutandetail")
  .then(status)
  .then(json)
  .then(function(data){
    var hutanlistHTML = "";
    data.hutanDetail.forEach(function(hutan_lindung){
      hutanlistHTML += `
        <div class = "col m4 s6">
          <div class = "card">
            <a href="detailhutan.html?id=${hutan_lindung.id}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${hutan_lindung.gambar}"/>
              </div>
            </a>
            <div class="card-content center">
            <a href="detailhutan.html?id=${hutan_lindung.id}" class="data">${hutan_lindung.judul}</a>
            </div>
          </div>
        </div>

        `;

        $("#section_title").html( "5 Hutan Lindung Di Indonesia" );
    });
        document.getElementById("hutanlist").innerHTML = hutanlistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}



function getHutanDetail(id) {
  fetch(endpoint_url+ "/hutan/hutandetail"+"?id="+ id)
  .then(status)
  .then(json)
  .then(function(data){
    var hutanlistHTML = "";
    data.hutanDetail.forEach(function(hutan_lindung){
      hutanlistHTML += `
        <div class = "col m3 s6">
          <div class = "card">
            <a href="detailhutan.html?id=${hutan_lindung.id}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${hutan_lindung.gambar}"/>
              </div>
            </a>
            <div class="card-content center">
            <h5 class="data"><strong>${hutan_lindung.judul}</strong></h5>
            </div>
          </div>
        </div>

        <div class="col m7 s12">
        <table class="data">
        <thead>
          <tr>
              <th>ID Model</th>
              <td class="grey-text text-darken-2">${hutan_lindung.id}</td>
          </tr>
          <tr>
          <th>Nama Model</th>
            <td class="grey-text text-darken-2">${hutan_lindung.judul}</td>
          </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
        <div class="col m12 s12" style="border:2px;">
          <h5 class="data">Deskripsi</h5>
          <p>${hutan_lindung.isi}</p>
        </div>
        `;

        $("#section_title").html( "5 Hutan Lindung Di Indonesia" );
    });
        document.getElementById("detailhutan").innerHTML = hutanlistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}
