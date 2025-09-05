function tabcloak() {
    document.title = "Home";
    changeicon('https://res.cloudinary.com/dpkh9q5xy/image/upload/v1757028404/classr_lmoe27.png');
}

function tabcloakclever() {
    document.title = "Clever | Log in";
    changeicon('https://res.cloudinary.com/dpkh9q5xy/image/upload/v1757028481/cropped-Favicon-512px-32x32_g5owns.webp');
}

function tabcloakixl() {
    document.title = "IXL | Dashboard";
    changeicon('https://res.cloudinary.com/dpkh9q5xy/image/upload/v1757028539/ixl-favicon_hsgkq0.png');
}

function resetcloak() {
    document.title = "Galaxy Hub";
    changeicon('https://res.cloudinary.com/dpkh9q5xy/image/upload/v1757029207/galaxyhubanimated_rzkhcm.gif');
}

function changeicon(url) {
    const link = document.getElementById('favicon');
    link.href = url;
}