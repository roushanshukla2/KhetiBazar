import React, { useEffect, useRef, useState } from "react";
import "./styles/AutoScrollingNotifications.css"; // Ensure you have appropriate styles

const notificationsData = [
  {
    userName: "User 6208 **** 15",
    message: "Withdraw ₹9108 successfully",
    timestamp: "2025-06-17 21:35",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    userName: "User 8301 **** 46",
    message: "Withdraw ₹1983 successfully",
    timestamp: "2025-06-17 21:32",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    userName: "User 7209 **** 34",
    message: "Withdraw ₹5400 successfully",
    timestamp: "2025-06-17 21:29",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    userName: "User 9204 **** 71",
    message: "Withdraw ₹3782 successfully",
    timestamp: "2025-06-17 21:27",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    userName: "User 8147 **** 89",
    message: "Withdraw ₹1250 successfully",
    timestamp: "2025-06-17 21:25",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    userName: "User 1012 **** 12",
    message: "Withdraw ₹2890 successfully",
    timestamp: "2025-06-17 21:20",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    userName: "User 4567 **** 98",
    message: "Withdraw ₹3333 successfully",
    timestamp: "2025-06-17 21:18",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    userName: "User 9988 **** 44",
    message: "Withdraw ₹6789 successfully",
    timestamp: "2025-06-17 21:15",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    userName: "User 3344 **** 21",
    message: "Withdraw ₹2200 successfully",
    timestamp: "2025-06-17 21:12",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    userName: "User 7766 **** 33",
    message: "Withdraw ₹1999 successfully",
    timestamp: "2025-06-17 21:10",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

export default function AutoScrollingNotifications() {
  const listRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    const notificationsCount = notificationsData.length;
    let notificationHeight = 0;

    if (list && list.children.length > 0) {
      notificationHeight = list.children[0].offsetHeight;
    }

    const scroll = () => {
      setIndex((prevIndex) => {
        let nextIndex = prevIndex + 1;
        if (nextIndex >= notificationsCount) {
          // Reset immediately
          if (list) {
            list.style.transition = "none";
            list.style.transform = "translateY(0)";
          }
          nextIndex = 1;
          // Force reflow to apply styles immediately
          if (list) void list.offsetHeight;

        }

        // Animate scroll
        setTimeout(() => {
          if (list) {
            list.style.transition = "transform 0.5s ease";
            list.style.transform = `translateY(-${notificationHeight * nextIndex}px)`;
          }
        }, 50);

        return nextIndex;
      });
    };

    const interval = setInterval(scroll, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="parent-wrapper">

    <div className="notification-wrapper">
      <div className="notifications-list" ref={listRef}>
        {notificationsData.map(({ userName, message, timestamp, icon }, i) => (
          <div className="notification" key={i}>
            <div className="notification-left">
              <img src={icon} alt="User Icon" className="user-icon" />
              <div className="notification-content">
                <div className="user-name">{userName}</div>
                <div className="message">{message}</div>
              </div>
            </div>
            <div className="timestamp">{timestamp}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
