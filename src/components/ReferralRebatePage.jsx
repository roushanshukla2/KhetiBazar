import React, { useState } from "react";
import "./styles/ReferralRebatePage.css";

import firstImage from "../assets/first.png";
import secondImage from "../assets/second.png";
import thirdImage from "../assets/third.png";

const ReferralRebatePage = () => {
  const [copied, setCopied] = useState(false);

  const inviteLink = "http://khedi-xbazardhzx.top/home/register?invite=SQG1G4V7";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const levels = [
    {
      name: "First",
      img: firstImage,
      rebateRatio: "10%",
      rebateAmount: "₹139533.00",
      quantity: "1787",
    },
    {
      name: "Second",
      img: secondImage,
      rebateRatio: "10%",
      rebateAmount: "₹139533.00",
      quantity: "1787",
    },
    {
      name: "Third",
      img: thirdImage,
      rebateRatio: "10%",
      rebateAmount: "₹139533.00",
      quantity: "1787",
    },
  ];

  return (
    <>
      <div className="container">
        {/* Summary */}
        <div className="summary-box">
          <div className="summary-item">
            <h4>Total People</h4>
            <p>1787</p>
          </div>
          <div className="summary-item">
            <h4>Total Rebate</h4>
            <p>₹139533</p>
          </div>
        </div>

        {/* Invitation */}
        <div className="invitation-box">
          <div>
            <span>🎁 Invitation Link</span>
            <div className="invitation-link" id="inviteLink">
              {inviteLink}
            </div>
          </div>
          <button className="copy-btn" onClick={copyToClipboard}>
            Copy link
          </button>
        </div>

        {/* Level Info */}
        <div className="level-header-wrapper">
          {levels.map((level) => (
            <React.Fragment key={level.name}>
              <div className="level-header">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={level.img} alt={`${level.name}-level`} />
                  <h4>{`${level.name} Level`}</h4>
                </div>
              </div>

              <div className="level-info-box">
                <div className="level-info">
                  <h3>{level.rebateRatio}</h3>
                  <p>Rebate ratio</p>
                </div>
                <div className="level-info">
                  <h3>{level.rebateAmount}</h3>
                  <p>Rebate</p>
                </div>
                <div className="level-info">
                  <h3>{level.quantity}</h3>
                  <p>Quantity</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Toast */}
      {copied && (
        <div id="toast" className="toast show">
          <span className="check-icon">✔</span>
          Copied Successfully
        </div>
      )}

      {/* Policy Section */}
      <div className="policy-container">
        <p>
          Copy your invitation link or code and share it with your friends and
          family, let them register and invest through your invitation link or
          code, and you can earn team commissions.
          <br /><br />
          You can invite A to become your first-level team member, then A
          invites B to become your second-level team member, and B invites C to
          become your third-level team member.
          <br /><br />
          <strong>A</strong> Invest in Product 1, you can get commission
          <strong> ₹80</strong>
          <br /><br />
          <strong>B</strong> Invest in Product 1, you can get commission
          <strong> ₹0</strong>
          <br /><br />
          <strong>C</strong> Invest in Product 1, you can get commission
          <strong> ₹0</strong>
          <br /><br />
          The main sources of high commissions: The more friends you invite and
          the higher their investment, the more commissions you can earn.
        </p>
      </div>
    </>
  );
};

export default ReferralRebatePage;
