function create_card(title, description) {
    var card = `
    <div class="card">
        <span onclick="this.parentElement.remove()" class="close">&times;</span>
        <h2>{{title}}</h2>
        <p>{{description}}</p>
    </div>
    `;
    
    if (title.length && description.length) {
        card = card.replace('{{title}}', title);
        return card.replace('{{description}}', description);
    }    
    return '';
}

export {create_card}