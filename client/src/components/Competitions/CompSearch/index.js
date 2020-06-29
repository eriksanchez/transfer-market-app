import React from "react";

const CompSearch = () => {
  const IconSize = "35px";
  return (
    <div style={{ marginLeft: "20%", marginRight: "20%" }}>
      <svg
        width={IconSize}
        height={IconSize}
        viewBox="0 0 16 16"
        class="bi bi-house-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: "20px", marginLeft: "10px" }}
      >
        <path
          fill-rule="evenodd"
          d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
        />
        <path
          fill-rule="evenodd"
          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
        />
      </svg>
      <svg
        width={IconSize}
        height={IconSize}
        viewBox="0 0 16 16"
        class="bi bi-flag-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: "100px" }}
      >
        <path
          fill-rule="evenodd"
          d="M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
        />
        <path
          fill-rule="evenodd"
          d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"
        />
      </svg>
      <svg
        width={IconSize}
        height={IconSize}
        viewBox="0 0 16 16"
        class="bi bi-trophy"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: "100px" }}
      >
        <path d="M3 1h10c-.495 3.467-.5 10-5 10S3.495 4.467 3 1zm0 15a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1H3zm2-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1H5z" />
        <path
          fill-rule="evenodd"
          d="M12.5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-6-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"
        />
        <path d="M7 10h2v4H7v-4z" />
        <path d="M10 11c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z" />
      </svg>
      <svg
        width={IconSize}
        height={IconSize}
        viewBox="0 0 16 16"
        class="bi bi-people-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: "100px" }}
      >
        <path
          fill-rule="evenodd"
          d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
        />
      </svg>
      <svg
        width={IconSize}
        height={IconSize}
        viewBox="0 0 16 16"
        class="bi bi-person-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        />
      </svg>
    </div>
  );
};

export default CompSearch;
