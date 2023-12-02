import { create_card } from "./template.js"

let btn = document.getElementsByTagName('button')[0];

btn.onclick = function(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let card_area = document.getElementById('card-area')

    card_area.innerHTML = create_card(title, description) + card_area.innerHTML;
} 