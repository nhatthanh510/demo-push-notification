import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL = 'https://sigma-notification-service-qpchnpiwvq-od.a.run.app';
const API_KEY = '1ab2c3d4e5f61ab2c3d4e5f6';

function App() {
  const [emailSubject, setEmailSubject] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [emails, setEmails] = useState('');

  const [pushContent, setPushContent] = useState('');
  const [pushHeading, setPushHeading] = useState('');

  const [smsName, setSmsName] = useState('');
  const [smsContents, setSmsContent] = useState('');
  const [smsPhoneNumbers, setSmsPhoneNumbers] = useState('');

  const [whatsappContent, setWhatsappContent] = useState('');
  const [whatsappPhoneNumber, setWhatsappPhoneNumber] = useState('');

  const sendEmail = async () => {
    try {
      const formattedEmails = emails.split(',').map(item => item.trim());
      const data = {
        emailSubject,
        contents: emailContent,
        emails: formattedEmails,
      };
      const sendEmailEndpoint = `${BASE_URL}/notification/email`;
      const result = await axios.post(sendEmailEndpoint, data, {
        headers: {
          'x-api-key': API_KEY,
        },
      });

      console.log('sendEmail >>', result);
    } catch (error) {}
  };

  const sendSms = async () => {
    try {
      const formattedSmsNumbers = smsPhoneNumbers
        .split(',')
        .map(item => item.trim());
      const data = {
        name: smsName,
        contents: {
          en: smsContents,
        },
        phone_numbers: formattedSmsNumbers,
      };
      const sendEmailEndpoint = `${BASE_URL}/notification/sms`;
      const result = await axios.post(sendEmailEndpoint, data, {
        headers: {
          'x-api-key': API_KEY,
        },
      });

      console.log('sendEmail >>', result);
    } catch (error) {}
  };

  const sendPushNotification = async () => {
    try {
      const data = {
        contents: {
          en: pushContent,
        },
        headings: {
          en: pushHeading,
        },
        segments: ['Subscribed Users'],
        one_signal_user_ids: ['4dc4927d-3dff-4798-a141-4c015c9c7c81'],
      };
      const sendPushNotificationEndpoint = `${BASE_URL}/notification/push_notification`;
      const result = await axios.post(sendPushNotificationEndpoint, data, {
        headers: {
          'x-api-key': API_KEY,
        },
      });

      console.log('result >>', result);
    } catch (error) {}
  };

  const sendWhatsappMessage = async () => {
    try {
      const data = {
        content: whatsappContent,
        phone_number: whatsappPhoneNumber,
      };
      const sendPushNotificationEndpoint = `${BASE_URL}/notification/whatsapp`;
      const result = await axios.post(sendPushNotificationEndpoint, data, {
        headers: {
          'x-api-key': API_KEY,
        },
      });

      console.log('sendWhatsappMessage >>', result);
    } catch (error) {}
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Send email</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">emailSubject</span>
            </label>
            <input
              onChange={e => setEmailSubject(e.target.value)}
              type="text"
              placeholder={`email subject`}
              className="input input-bordered w-full"
              value={emailSubject}
            />
            <label className="label">
              <span className="label-text">emailContent</span>
            </label>
            <input
              onChange={e => setEmailContent(e.target.value)}
              type="text"
              placeholder={`email content`}
              className="input input-bordered w-full"
              value={emailContent}
            />
            <label className="label">
              <span className="label-text">emails</span>
            </label>
            <input
              onChange={e => setEmails(e.target.value)}
              value={emails}
              type="text"
              placeholder={`email1@a.com,email2@a.com`}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mt-2 card-actions">
            <button className="btn btn-primary" onClick={sendEmail}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Send SMS</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              onChange={e => setSmsName(e.target.value)}
              type="text"
              placeholder={`Name`}
              className="input input-bordered w-full"
              value={smsName}
            />
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <input
              onChange={e => setSmsContent(e.target.value)}
              type="text"
              placeholder={`Content`}
              className="input input-bordered w-full"
              value={smsContents}
            />
            <label className="label">
              <span className="label-text">Phone numbers</span>
            </label>
            <input
              onChange={e => setSmsPhoneNumbers(e.target.value)}
              type="text"
              placeholder={`+381123445, +381111111`}
              className="input input-bordered w-full"
              value={smsPhoneNumbers}
            />
          </div>
          <div className="mt-2 card-actions">
            <button className="btn btn-primary" onClick={sendSms}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Push notification</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <input
              onChange={e => setPushContent(e.target.value)}
              type="text"
              placeholder={`content`}
              className="input input-bordered w-full"
              value={pushContent}
            />
            <label className="label">
              <span className="label-text">Heading</span>
            </label>
            <input
              onChange={e => setPushHeading(e.target.value)}
              type="text"
              placeholder={`heading`}
              className="input input-bordered w-full"
              value={pushHeading}
            />
          </div>
          <div className="mt-2 card-actions">
            <button className="btn btn-primary" onClick={sendPushNotification}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Send Whatsapp message</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <input
              onChange={e => setWhatsappContent(e.target.value)}
              type="text"
              placeholder={`content`}
              className="input input-bordered w-full"
              value={whatsappContent}
            />
            <label className="label">
              <span className="label-text">Phone number</span>
            </label>
            <input
              onChange={e => setWhatsappPhoneNumber(e.target.value)}
              type="text"
              placeholder={`+381123445`}
              className="input input-bordered w-full"
              value={whatsappPhoneNumber}
            />
          </div>
          <div className="mt-2 card-actions">
            <button className="btn btn-primary" onClick={sendWhatsappMessage}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
