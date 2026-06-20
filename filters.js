function applyFilters(){

let brand=document.getElementById("brand").value;
let minP=+document.getElementById("minPrice").value||0;
let maxP=+document.getElementById("maxPrice").value||999999;
let minM=+document.getElementById("minMileage").value||0;
let maxM=+document.getElementById("maxMileage").value||999999;
let cond=document.getElementById("condition").value;

let result=cars.filter(c=>
(c.brand===brand||brand==="all")&&
c.price>=minP&&c.price<=maxP&&
c.mileage>=minM&&c.mileage<=maxM&&
(cond==="all"||c.condition===cond)
);

render(result);
}
