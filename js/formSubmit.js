

  let captcha;
  let enteredCaptcha= document.getElementById("enteredCaptcha");
  function generate() {
   
      // Clear old input
      // document.getElementById("submit").value = "";
   
      // Access the element to store
      // the generated captcha
      captcha = document.getElementById("captcha");
      let uniquechar = "";
   
      const randomchar =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   
      // Generate captcha for length of
      // 5 with random character
      for (let i = 1; i < 5; i++) {
          uniquechar += randomchar.charAt(
              Math.random() * randomchar.length)
      }
   
      // Store generated input
      captcha.value = uniquechar;
  }
   
  function printmsg() {
      const usr_input = enteredCaptcha.value;
      if (usr_input == captcha.value) {
          return true;
      }
      else {
         return false;
      }
  }

  function admissionSubmitHandler() {
    const isCaptchaVerified=printmsg()
    if (isCaptchaVerified) {
      
        var params={
          name:document.getElementById('name').value,
          email:document.getElementById('email').value,
          mobile:document.getElementById('mobile').value,
          programList:document.getElementById('programList').value
        }
        // console.log(params);
        fetch("mail.php", {
          method: "POST",
          body: params
        })
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to send email.");
          }
          alert("Email sent successfully!");
          this.reset();
        })
        .catch(error => {
          console.error(error);
          alert("Failed to send email. Please try again later.");
        });  
    } else {
      document.getElementById('captcha-error-message').style.display = 'block';
      enteredCaptcha.value="";
      generate();
    }
   
  }
  window.onload = () => {
   generate()
  };
  function hideError(params) {
    document.getElementById('captcha-error-message').style.display = 'none';
  }
  changeImage()

  function changeImage() {   
    var BackgroundImg=['../assets/gallery-assets/AcademicFacilities2.png','../assets/gallery-assets/AcademicFacilities3.png','../assets/gallery-assets/AcademicFacilities4.png'];
    var i = Math.floor((Math.random() * 3));
    var bgImg = document.getElementById('admissionView');
  bgImg.style.backgroundImage = "url('"+BackgroundImg[i]+"')";
  bgImg.style.backgroundSize='cover'
  
    setTimeout(changeImage, 2000);
  }


