
copy_otp = document.getElementById("copy-otp")
otp = document.getElementById("otp-number").innerHTML



copy_otp.addEventListener("click", () => {
    navigator.clipboard.writeText(otp)
      .then(() => {
        console.log('Number copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });

      copy_otp.innerText = "Copied !";
      setTimeout(function() {
        copy_otp.innerText = "Copy OTP";
    }, 1000);
  })


// copy_otp.addEventListener("click", () => {
//     navigator.clipboard.writeText(otp)
//       .then(() => {
//         console.log('Number copied to clipboard');
//       })
//       .catch(err => {
//         console.error('Failed to copy: ', err);
//       });
//   })




// const copyToClipboard = () => {
//     let otp = document.getElementById("otp-number").innerText
//     navigator.clipboard.writeText(otp)
//       .then(() => {
//         console.log('Number copied to clipboard');
//       })
//       .catch(err => {
//         console.error('Failed to copy: ', err);
//       });
//   };