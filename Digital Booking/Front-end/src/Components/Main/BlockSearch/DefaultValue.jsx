import React from "react";

export default function DefaultValue() {
  return (
    <>
      <div id="container-default-value">
        <svg
          className="location-default"
          width="18"
          height="26"
          viewBox="0 0 18 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12.35C8.14752 12.35 7.32995 12.0076 6.72716 11.3981C6.12436 10.7886 5.78571 9.96195 5.78571 9.1C5.78571 8.23805 6.12436 7.4114 6.72716 6.8019C7.32995 6.19241 8.14752 5.85 9 5.85C9.85248 5.85 10.67 6.19241 11.2728 6.8019C11.8756 7.4114 12.2143 8.23805 12.2143 9.1C12.2143 9.5268 12.1311 9.94941 11.9696 10.3437C11.8081 10.738 11.5713 11.0963 11.2728 11.3981C10.9744 11.6999 10.62 11.9393 10.2301 12.1026C9.84008 12.2659 9.42211 12.35 9 12.35ZM9 0C6.61305 0 4.32387 0.958747 2.63604 2.66533C0.948211 4.37191 0 6.68653 0 9.1C0 15.925 9 26 9 26C9 26 18 15.925 18 9.1C18 6.68653 17.0518 4.37191 15.364 2.66533C13.6761 0.958747 11.3869 0 9 0Z"
            fill="#545776"
          />
        </svg>

        <p id="default">Where are you going?</p>
      </div>
    </>
  );
}
