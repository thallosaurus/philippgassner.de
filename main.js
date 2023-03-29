window.addEventListener("load", (ev) => {
    fetch("key.txt")
    .then(e => {
        return e.text();
    })
    .then(e => {
        d = atob(e);
        console.log(d);
        // document.querySelector("#rickroll").innerText = e;
        let split = d.replace("\r\n", "\n");
        split = split.split("----\n");

        // debugger;

        let i = 0;

        setInterval(() => {
            document.querySelector("#rickroll").innerText = split[i];
            i++;

            if (i == split.length - 1) {
                i = 0;
                // clearInterval(interval);
            } 
        }, 100);

    });
})