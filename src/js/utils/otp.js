// Hàm để gửi OTP
function sendOTP() {
 var sendOtp = document.querySelector('#send-otp-btn');
 var otpVerify = document.querySelector('.otpverify');
 
 sendOtp.addEventListener('click', () => {
   otpVerify.style.display = 'block';
 });

 document.addEventListener('click', (event) => {
   if (!otpVerify.contains(event.target) && event.target !== sendOtp) {
     otpVerify.style.display = 'none';
   }
 });
}
