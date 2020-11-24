function Plus()
{
    var value = parseInt(document.getElementById('plusminus').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('plusminus').value = value;
}

function Minus()
{
    var value = parseInt(document.getElementById('plusminus').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('plusminus').value = value;
}