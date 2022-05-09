const objData = JSON.parse(jsonData);
const productsList = objData.products;

let showProducts = "";

productsList.forEach((element) => {
  // compare_at_price >>>
  let compare_at_price = "";
  if (element.variants[0].compare_at_price != element.variants[0].price) {
    compare_at_price = element.variants[0].compare_at_price + " <b>đ</b>";
  } else {
    compare_at_price = "";
  }
  //   percent_discount >>>
  let percent_discount = 0;
  if (element.variants[0].compare_at_price != element.variants[0].price) {
    percent_discount =
      "-" +
      (100 -
        parseFloat(
          element.variants[0].price / element.variants[0].compare_at_price
        ).toFixed(2) *
          100) +
      "%";
  } else {
    percent_discount = "";
  }
  //  inventory >>>
  let inventory = "";
  if (element.variants[0].inventory_policy === "allow") {
    inventory = "Còn hàng";
  } else {
    inventory = `Còn lại: ${element.variants[0].inventory_quantity} sản phẩm`;
  }

  showProducts += `<div class="col-md-3 my-3">
                    <div class="card border-success">
                      <img src="${element.image.src}" height="316.3px" weight="auto"/>
                      <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p>
                          <span>${element.variants[0].price}</span><b> đ &nbsp;</b>
                          <del class="text-danger">${compare_at_price}</del>
                          <sup class="text-danger"> ${percent_discount}</sup>
                        </p>
                        <p><em>${inventory}</em></p>
                        <button type="button" class="btn btn-outline-success">Add to shop</button>
                      </div>
                    </div>
                  </div>`;
});
document.querySelector("#listProducts").innerHTML = showProducts;

function searchProduct() {
  const input = document.querySelector("input");
  const filterValue = input.value.toUpperCase();

  const titleList = document.querySelectorAll(".card-title");
  titleList.forEach((element) => {
    const titleValue = element.textContent;
    if (titleValue.toUpperCase().indexOf(filterValue) > -1) {
      element.parentElement.parentElement.parentElement.style.display = "";
    } else {
      element.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
}
