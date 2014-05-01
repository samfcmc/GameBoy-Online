// Some dumping info functions
// Trying to do reverse engineering :)
//

function dumpDebug(text) {
    var dumpArea = $('#dump');

    dumpArea.append(text + '\n');
    dumpArea.scrollTop(dumpArea[0].scrollHeight - dumpArea.height());
}
