const endpoint_url = 'https://51018001.p-web.clik/hutan/api';

document.addEventListener("DOMContentLoaded", function(){
  getHutan();
});

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
