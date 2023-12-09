var dropdown = document.getElementById('pilihan');
    var resultParagraph = document.getElementById('selectedOptionText');

    dropdown.addEventListener('change', function () {
        var selectedOption = dropdown.options[dropdown.selectedIndex].text;
        resultParagraph.textContent = 'Selected Option: ' + selectedOption;
    });


function updateCurrentTime() {
    var currentTimeElement = document.getElementById('currentTime');
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    var currentTimeString = hours + ':' + minutes + ':' + seconds;

    currentTimeElement.textContent = 'Pukul: ' + currentTimeString;

    setTimeout(updateCurrentTime, 1000);
}


document.addEventListener("DOMContentLoaded", function () {

    var scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
});

document.addEventListener('DOMContentLoaded', function () {
    var selectAllCheckbox = document.getElementById('selectAllCheckbox');
    var checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');

    selectAllCheckbox.addEventListener('change', function () {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            var allChecked = true;
            checkboxes.forEach(function (cb) {
                if (!cb.checked) {
                    allChecked = false;
                }
            });
            selectAllCheckbox.checked = allChecked;
        });
    });
});

