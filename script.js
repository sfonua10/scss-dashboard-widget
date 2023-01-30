
function educationMenu() {
    if (!$('#dashDrop').hasClass('subList')) {
        $('#dashDrop').addClass('subList');
    }

    if (!$('#resourceDrop').hasClass('subList')) {
        $('#resourceDrop').addClass('subList');
    }

    if (!$('#settingsDrop').hasClass('subList')) {
        $('#settingsDrop').addClass('subList');
    }
    $('#eduDrop').toggleClass('subList');
}

function dashboardMenu() {
    if (!$('#resourceDrop').hasClass('subList')) {
        $('#resourceDrop').addClass('subList');
    }

    if (!$('#settingsDrop').hasClass('subList')) {
        $('#settingsDrop').addClass('subList');
    }

    if (!$('#eduDrop').hasClass('subList')) {
        $('#eduDrop').addClass('subList');
    }
    
    $('#dashDrop').toggleClass('subList');
}

function resourceMenu() {
    if (!$('#settingsDrop').hasClass('subList')) {
        $('#settingsDrop').addClass('subList');
    }

    if (!$('#eduDrop').hasClass('subList')) {
        $('#eduDrop').addClass('subList');
    }

    if (!$('#dashDrop').hasClass('subList')) {
        $('#dashDrop').addClass('subList');
    }

    $('#resourceDrop').toggleClass('subList');
}

function settingsMenu() {
    if (!$('#eduDrop').hasClass('subList')) {
        $('#eduDrop').addClass('subList');
    }

    if (!$('#dashDrop').hasClass('subList')) {
        $('#dashDrop').addClass('subList');
    }
    if (!$('#resourceDrop').hasClass('subList')) {
        $('#resourceDrop').addClass('subList');
    }

    $('#settingsDrop').toggleClass('subList');
}