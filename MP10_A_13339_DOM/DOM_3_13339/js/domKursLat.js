var targetNode;

function init() {
    targetNode = document.getElementById("hasil").firstChild;
    hitungKurs("idr");
}

function hitungKurs(id) {
    var inputEl = document.getElementById(id);
    var nominal = parseFloat(inputEl.value);
    var hasilUsd = nominal / 18246;
    var formattedUsd = hasilUsd.toFixed(2);

    targetNode.data = formattedUsd;

    var riwayatList = document.getElementById("riwayat");
    var liBaru = document.createElement("li");
    var teksRiwayat = document.createTextNode("Rp" + nominal + " -> US$" + formattedUsd);
    liBaru.appendChild(teksRiwayat);
    riwayatList.appendChild(liBaru);
}