import React from "react"
import ContentLoader from "react-content-loader"

const CardProductByQuerySkeleton = (props) => {
    let height, width;

    switch (props.screen) {
      case "mobile": {
        height = "100";
        width = "400";
        break;
      }
      case "desktop": {
        height = "100";
        width = "400";
        break;
      }
      case "large-screen": {
        height = "150";
        width = "1920";
        break;
      }
      case "largeXL-screen": {
        height = "150";
        width = "1920";
        break;
      }
      default: {
        height = "100";
        width = "1060";
        break;
      }
    }
    return (
    <div className="card">
      <ContentLoader
        height={height}
        width={width}
        
        speed={2}
        primaryColor="#d7dada"
        secondaryColor="#5e5a5a"
        {...props}
      >
        {props.imageType === "circle" ? (
          <circle cx="60" cy="45" r="30" />
        ) : (
          <rect x="20" y="0" rx="5" ry="5" width="304" height="330" />
        )}
        <rect x="335" y="20" rx="5" ry="5" width="400" height="5" />
        <rect x="335" y="29" rx="5" ry="5" width="400" height="5" />
        <rect x="335" y="38" rx="5" ry="5" width="400" height="5" />
        <rect x="335" y="45" rx="5" ry="5" width="400" height="5" />
        <rect x="335" y="55" rx="5" ry="5" width="400" height="5" />
        <rect x="335" y="70" rx="5" ry="5" width="400" height="5" />
        <rect x="335" y="80" rx="5" ry="5" width="400" height="12" />
        <rect x="335" y="180" rx="5" ry="5" width="400" height="12" />
      </ContentLoader>
    </div>
    );
};

export default CardProductByQuerySkeleton;
