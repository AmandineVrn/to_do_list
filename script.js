function addItem(current_list) {
    var list_content = current_list.getElementsByClassName('list_content')[0];
    var new_content = document.createElement('ul');
    new_content.innerHTML = '<li><input type="checkbox"><input type="text"></li>';
    list_content.appendChild(new_content);
}
  
function addList() {
    var more_list = '<div class="b_list"><input id="input_titre" type="text" placeholder="Title"><div class="list_content"><ul><li><input type="checkbox"><input id="list_item" type="text"></li></ul></div><button onclick="addItem(this.parentNode)">+</button></div>';
    document.getElementById('listes').innerHTML += more_list;
}