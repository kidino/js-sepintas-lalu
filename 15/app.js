var counter = 0;
var main_ul = document.getElementById('mainlist');

function add_top() {
    var firstChild = main_ul.firstChild;

    var new_li = create_li();

    main_ul.insertBefore(new_li, firstChild);

}

function add_bottom() {
    var new_li = create_li();

    main_ul.append(new_li)
}

function create_li() {

    var new_li = document.createElement('li');
    counter++;

    new_li.innerHTML = "<b>"+ counter + " - item baru</b><span>X</span>";

    return new_li;
}

main_ul.addEventListener('click', function(event){
    console.log(event.target.tagName)
    if (event.target.tagName == "SPAN") {
        event.target.parentElement.remove();
    }
})

