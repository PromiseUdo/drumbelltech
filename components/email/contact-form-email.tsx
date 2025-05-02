// import React from "react";

// interface EmailTemplateProps {
//   actionLabel: string;
//   username: string;
//   buttonText: string;
//   href: string;
//   statementLabel: string;
// }

// export const EmailTemplate = ({
//   actionLabel,
//   username,
//   buttonText,
//   href,
//   statementLabel,
// }: EmailTemplateProps) => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#f5f7fa",
//         fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//         padding: "40px 20px",
//         lineHeight: "1.6",
//         color: "#1a202c",
//       }}
//     >
//       {/* Preheader */}
//       <div
//         style={{
//           display: "none",
//           maxWidth: 0,
//           maxHeight: 0,
//           overflow: "hidden",
//           fontSize: "1px",
//           lineHeight: "1px",
//           color: "#f5f7fa",
//           opacity: 0,
//         }}
//       >
//         Thank you for reaching out to Gusto Professionals
//       </div>

//       {/* Main Container */}
//       <div
//         style={{
//           maxWidth: "600px",
//           margin: "0 auto",
//           backgroundColor: "#ffffff",
//           borderRadius: "12px",
//           overflow: "hidden",
//           boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         {/* Header */}
//         <div
//           style={{
//             backgroundColor: "#04306e",
//             padding: "18px",
//             textAlign: "center",
//           }}
//         >
//           <img
//             style={{
//               width: "80px",
//               margin: "0 auto",
//               display: "block",
//             }}
//             src="https://res.cloudinary.com/doyix74kc/image/upload/v1744979117/logo_vbfvsy.png"
//             alt="Gusto Professionals Logo"
//           />
//         </div>

//         {/* Content */}
//         <div style={{ padding: "32px" }}>
//           <h1
//             style={{
//               fontSize: "24px",
//               fontWeight: 700,
//               color: "#04306e",
//               margin: "0 0 16px",
//               textAlign: "center",
//             }}
//           >
//             {actionLabel}
//           </h1>
//           <p
//             style={{
//               fontSize: "16px",
//               color: "#4a5568",
//               margin: "0 0 16px",
//             }}
//           >
//             Dear {username},
//           </p>
//           <p
//             style={{
//               fontSize: "16px",
//               color: "#4a5568",
//               margin: "0 0 24px",
//             }}
//           >
//             Thank you for reaching out to us! We've received your message and
//             our team will get back to you as soon as possible. We appreciate
//             your patience and look forward to assisting you.
//           </p>

//           {/* CTA Button */}
//           {/* <div style={{ textAlign: "center", margin: "24px 0" }}>
//             <a
//               href={href || "https://gustoprofessionals.com"}
//               style={{
//                 display: "inline-block",
//                 padding: "12px 24px",
//                 backgroundColor: "#04306e",
//                 color: "#ffffff",
//                 textDecoration: "none",
//                 borderRadius: "8px",
//                 fontSize: "16px",
//                 fontWeight: 500,
//                 transition: "background-color 0.2s ease",
//               }}
//             >
//               {buttonText || "Visit Our Website"}
//             </a>
//           </div> */}

//           {/* Signature */}
//           <p
//             style={{
//               fontSize: "14px",
//               color: "#718096",
//               margin: "24px 0 0",
//             }}
//           >
//             Best regards,
//             <br />
//             The Gusto Professionals Team
//           </p>
//         </div>

//         {/* Footer */}
//         <div
//           style={{
//             backgroundColor: "#f7fafc",
//             padding: "16px",
//             textAlign: "center",
//             fontSize: "12px",
//             color: "#718096",
//             borderTop: "1px solid #e2e8f0",
//           }}
//         >
//           <p style={{ margin: "0 0 8px" }}>
//             You received this email because you contacted Gusto Professionals.
//           </p>
//           <p style={{ margin: "0" }}>
//             If you didn't, please{" "}
//             <a
//               href="mailto:info.gustoprofessionals@gmail.com"
//               style={{ color: "#04306e", textDecoration: "underline" }}
//             >
//               contact us
//             </a>{" "}
//             or safely ignore this email.
//           </p>
//           <p style={{ margin: "8px 0 0" }}>
//             &copy; 2025 Gusto Professionals. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// EmailTemplate.tsx
import React from "react";

interface EmailTemplateProps {
  actionLabel: string;
  username: string;
  buttonText: string;
  href: string;
  statementLabel: string;
}

export const EmailTemplate = ({
  actionLabel,
  username,
  buttonText,
  href,
  statementLabel,
}: EmailTemplateProps) => {
  return (
    <div
      style={{
        backgroundColor: "#f5f7fa",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "40px 20px",
        lineHeight: "1.6",
        color: "#1a202c",
      }}
    >
      {/* Preheader */}
      <div
        style={{
          display: "none",
          maxWidth: 0,
          maxHeight: 0,
          overflow: "hidden",
          fontSize: "1px",
          lineHeight: "1px",
          color: "#f5f7fa",
          opacity: 0,
        }}
      >
        Thank you for reaching out to Drumbell Technologies
      </div>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#04306e",
            padding: "18px",
            textAlign: "center",
          }}
        >
          <img
            style={{
              width: "80px",
              margin: "0 auto",
              display: "block",
            }}
            src="https://via.placeholder.com/80x80.png?text=Drumbell+Logo"
            alt="Drumbell Technologies Logo"
          />
        </div>

        {/* Content */}
        <div style={{ padding: "32px" }}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#04306e",
              margin: "0 0 16px",
              textAlign: "center",
            }}
          >
            {actionLabel}
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#4a5568",
              margin: "0 0 16px",
            }}
          >
            Dear {username},
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#4a5568",
              margin: "0 0 24px",
            }}
          >
            Thank you for reaching out to us! We've received your message and
            our team will get back to you as soon as possible. We appreciate
            your patience and look forward to assisting you with your IT needs.
          </p>

          {/* CTA Button */}
          {/* <div style={{ textAlign: "center", margin: "24px 0" }}>
            <a
              href={href || "https://drumbelltechnologies.com"}
              style={{
                display: "inline-block",
                padding: "12px 24px",
                backgroundColor: "#04306e",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 500,
                transition: "background-color 0.2s ease",
              }}
            >
              {buttonText || "Visit Our Website"}
            </a>
          </div> */}

          {/* Signature */}
          <p
            style={{
              fontSize: "14px",
              color: "#718096",
              margin: "24px 0 0",
            }}
          >
            Best regards,
            <br />
            The Drumbell Technologies Team
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f7fafc",
            padding: "16px",
            textAlign: "center",
            fontSize: "12px",
            color: "#718096",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          <p style={{ margin: "0 0 8px" }}>
            You received this email because you contacted Drumbell Technologies.
          </p>
          <p style={{ margin: "0" }}>
            If you didn't, please{" "}
            <a
              href="mailto:fortuneokwu@gmail.com"
              style={{ color: "#04306e", textDecoration: "underline" }}
            >
              contact us
            </a>{" "}
            or safely ignore this email.
          </p>
          <p style={{ margin: "8px 0 0" }}>
            © 2025 Drumbell Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
