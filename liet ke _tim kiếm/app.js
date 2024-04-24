////// 

    function listProducts() {
        var container = document.getElementById("dogs");
        pets.forEach(function(pet) {
            var card = document.createElement("div");
            card.className = "col-3";  
            card.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${pet.image}" class="card-img-top" style="height:400px;">
                    <div class="card-body">
                        <h5 class="card-title">${pet.name}</h5>
                        <p class="card-text">Giống: ${pet.breed}</p>
                        <p class="card-text">Tuổi: ${pet.age}</p>
                        <p class="card-text">Giá: ${pet.price} VNĐ</p>
                        <a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }
/////// 

  //////Search-----
  document.getElementById("inputRearch").addEventListener("input", function() {
    var search = this.value.trim().toLowerCase();
    var newArray = getData.filter(function(val) {
        return Object.values(val).some(function (value) {
            return value.toString().toLowerCase().includes(search);
        });
    });
        showInfo(newArray);
        });