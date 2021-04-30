function changeOuterLinks() {
    const navLinks = document.querySelectorAll(`nav#link-list a`)
    navLinks.forEach( element => {
        if(element.innerHTML.includes('outer-links')) {
            element.setAttribute('target', '_blank');
            element.innerHTML = `<strong>${element.innerHTML}</strong>`;
        }
    })

    document.querySelectorAll("nav").forEach((e) => {
        e.style.display = "flex";
        e.style.flexDirection = "column";
        e.style.margin = "0px auto";
        e.style.width = "30%";
        e.style.border = "1px solid blue";
        e.style.padding = "16px";
    });
}




export { changeOuterLinks };