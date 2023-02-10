let memory = 0.0

function display (val) {
    document.getElementById('textval').value += val
}
function clr () {
    document.getElementById('textval').value = ''
}
function equals () {
    document.getElementById('textval').value = eval(document.getElementById('textval').value)
}
function memoryStore () {
    memory = eval(document.getElementById('textval').value)
}
function memoryRecall () {
    document.getElementById('textval').value += memory
}
function memoryClear () {
    memory = ""
}