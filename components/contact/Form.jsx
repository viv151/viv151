import React from 'react';
import Script from 'next/script';
import Button from '../utils/Button';

function Form() {
  // const user = process.env.NEXT_PUBLIC_MAIL_USER;
  // const pass = process.env.NEXT_PUBLIC_MAIL_PASSWORD;
  return (
    <>
      <Script id="smtpCDN" src="https://smtpjs.com/v3/smtp.js" />
      <Script
        id="smtp"
        dangerouslySetInnerHTML={{
          __html:
            function sendmail() {
              var name = $('#name').val();
              var email = $('#email').val();
              var message = $('#message').val();
              const body = 'Name: ' + name + ' ' + '<br>Email: ' + email + '<br>Message: ' + message;

              Email.send({
                Host: "smtp.gmail.com",
                Username: "webcontact.lakshya@gmail.com",
                Password: "Lakshya@22",
                // Username: user,
                // Password: pass,
                To: 'lakshyafestldce@gmail.com',
                From: "webcontact.lakshya@gmail.com",
                Subject: "Web Contact From: " + name,
                Body: body
              }).then(
                message => {
                  if (message == 'OK') {
                    document.getElementById('submit-btn').innerHTML = '<Button type="orange" size="md">Yeah..your message has been send We\'ll reach you soon.<Button/>'
                    document.querySelectorAll('input').forEach(i => i.value = '');
                    document.querySelectorAll('textarea').forEach(i => i.value = '');
                  } else {
                    document.getElementById('submit-btn').innerHTML = '<Button type="orange" size="md">Ooops...There is an eror at sending message!<Button/>'
                  }
                }
              );
            }
          ,
        }} />
      <form action="javascript:sendmail()" method="post">
        <div className="px-6 py-6 lg:px-12 lg:py-8 h-full flex-1 flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-md">
          <h5 className="text-2xl lg:text-4xl mb-4 font-semibold">Leave a Message</h5>
          <div className="flex flex-col flex-1 gap-2 lg:gap-4">
            <input
              id="name"
              className="w-full mt-2 p-3 bg-lak-blue bg-opacity-50 text-white rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400"
              type="text"
              placeholder="Name"
              required
            />
            <input
              id="email"
              className="w-full mt-2 p-3 bg-lak-blue bg-opacity-50 text-white rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              id="message"
              rows="8"
              className="w-full h-full mt-2 p-3 bg-lak-blue bg-opacity-50 text-white rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400"
              placeholder="Message"
              required
            ></textarea>
            <div
              id="submit-btn"
              className="flex justify-end mt-4"
            >
              <Button type="orange" title="Send" size="md">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
