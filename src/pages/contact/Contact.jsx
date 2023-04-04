import React, { useState, useRef } from "react";
import { LayoutPage } from "../../layout/LayoutPage";
import { ContactBox, NormalBox, WidthCon } from "./styled";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coin, setCoin] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleContact = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ba78pa4",
        "template_dsy96je",
        form.current,
        "p4iPVs5tctZ75sFmL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFname("");
          setLname("");
          setEmail("");
          setPhone("");
          setCoin("");
          setAmount("");
          setMessage("");
          toast.success("Request Submitted");
        },
        (error) => {
          console.log(error.text);
          toast.error(error);
        }
      );
  };
  return (
    <div>
      <LayoutPage>
        <WidthCon>
          <h2>
            Complete Form <br />
            Below
          </h2>
          <br />
          <ContactBox>
            <form ref={form} onSubmit={handleContact}>
              <div className="input-group">
                <label className="label">First Name</label>
                <input
                  name="fname"
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="John"
                  required
                />
                <div></div>
              </div>

              <div className="input-group">
                <label className="label">Last Name</label>
                <input
                  name="lname"
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Doe"
                  required
                />
                <div></div>
              </div>

              <div className="input-group">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  required
                />
                <div></div>
              </div>

              <div className="input-group">
                <label className="label">Phone Number</label>
                <input
                  name="phone"
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone/Mobile Number"
                  required
                />
                <div></div>
              </div>

              <div className="input-group">
                <label className="label">Name of Cryptocurrency</label>
                <input
                  name="coin"
                  type="text"
                  value={coin}
                  onChange={(e) => setCoin(e.target.value)}
                  placeholder="i.e Bitcoin, Ethereum, etc"
                  required
                />
                <div></div>
              </div>

              <div className="input-group">
                <label className="label">Amount of Funds Lost/Stuck</label>
                <input
                  name="amount"
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount of Funds Lost/Stuck"
                  required
                />
                <div></div>
              </div>

              <div className="input-group">
                <label className="label">Case Report</label>
                <textarea
                  name="message"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please describe your case in more detail here..."
                  rows="5"
                  required
                ></textarea>
                <div></div>
              </div>

              <button type="submit">Submit Request</button>
            </form>
          </ContactBox>
        </WidthCon>

        <ToastContainer />
      </LayoutPage>
      <NormalBox>
        <div>
          <BsTelegram /> &nbsp;
          <a href="https://t.me/+18652401987">Reach us via Telegram</a>
        </div>
        <br />
        <div>
          <MdEmail />&nbsp;
          <a href="mailto:cyberdaniilloleg@gmail.com">Send us an email</a>
        </div>
      </NormalBox>
    </div>
  );
}

export default Contact;
