const generateQRButton = document.getElementById("generateQR");
const qrcodeContainer = document.getElementById("qrcode");

generateQRButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const userDetails = `Name: ${name}\nEmail: ${email}`;
    
    // Clear existing QR code
    qrcodeContainer.innerHTML = "";
    
    // Generate QR code
    const qrcode = new QRCode(qrcodeContainer, {
        text: userDetails,
        width: 128,
        height: 128
        
    });
    
        //   // Convert SVG to PNG using html2canvas
        //   html2canvas(qrcodeContainer, { useCORS: true }).then(canvas => {
        //     const dataURL = canvas.toDataURL("image/png");

        });
    
// });


