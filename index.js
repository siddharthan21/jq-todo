var i =0;

$(".btn").click(function (e) { 

    var a = $("input").val();
    $("ul").append(`<li class="li-${i}">
    <input type="checkbox" name="" id="li-${i}">
    <p>${a}</p>
    <div class="li-${i} " >
    <button >X</button>
    </div>
    </li>`);

$("button").addClass("btnn");


    i=i+1;
    // console.log(a)
});
