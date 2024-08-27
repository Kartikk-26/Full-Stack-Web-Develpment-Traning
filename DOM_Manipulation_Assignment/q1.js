function displayAttribute(){
    const element = document.getElementById('title');
    const attributeValue = element.getAttribute('data-info');
    document.getElementById('attribute-display').innerText = 'Current data-info attribute: ' + attributeValue;


}

function updateAttribute(){
    const newValue = document.getElementById('new-attribute').value;
    const element = document.getElementById('title');
    element.setAttribute('data-info',newValue);

    displayAttribute();
}

window.onload = displayAttribute;