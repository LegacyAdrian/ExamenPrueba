function createTimeBar() {
    let main = document.querySelector('main');
    let title = document.getElementsByName("title")[0].value;
    let time = document.getElementsByName("time")[0].value;
    let p = document.createElement('p');
    let bar = document.createElement('span');
    bar.textContent = title;
    let meter = document.createElement('meter');
    meter.min = 0;
    meter.max = 100;
    meter.value = parseInt(time);
    main.appendChild(p);
    p.appendChild(bar);
    p.appendChild(meter);
    console.log('works');
    console.log(parseInt(time));
    let id3;
    if (meter.value == 0) meter.value = 100;
    id3 = setInterval(() => {
        meter.value--;
        console.log(meter.value);
        if (meter.value == 0) parar();
    }, 100);
    meter.addEventListener("click", parar);
    function parar() {
        clearInterval(id3);
    }
}

