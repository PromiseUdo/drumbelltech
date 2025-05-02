// // AdminEmailTemplate.tsx
// import React from "react";

// interface AdminEmailTemplateProps {
//   name: string;
//   whatsappNumber: string;
//   email: string;
//   message: string;
// }

// export const AdminEmailTemplate = ({
//   name,
//   whatsappNumber,
//   email,
//   message,
// }: AdminEmailTemplateProps) => {
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
//         New contact form submission from {name}
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
//             New Contact Form Submission
//           </h1>
//           <p
//             style={{
//               fontSize: "16px",
//               color: "#4a5568",
//               margin: "0 0 24px",
//               textAlign: "center",
//             }}
//           >
//             You have received a new message from the Gusto Professionals
//             website.
//           </p>

//           {/* Form Data */}
//           <div
//             style={{
//               backgroundColor: "#f7fafc",
//               borderRadius: "8px",
//               padding: "20px",
//               marginBottom: "24px",
//             }}
//           >
//             <p
//               style={{
//                 fontSize: "16px",
//                 color: "#1a202c",
//                 margin: "0 0 12px",
//               }}
//             >
//               <strong>Name:</strong> {name}
//             </p>
//             <p
//               style={{
//                 fontSize: "16px",
//                 color: "#1a202c",
//                 margin: "0 0 12px",
//               }}
//             >
//               <strong>Phone:</strong> {whatsappNumber}
//             </p>
//             <p
//               style={{
//                 fontSize: "16px",
//                 color: "#1a202c",
//                 margin: "0 0 12px",
//               }}
//             >
//               <strong>Email:</strong>{" "}
//               <a
//                 href={`mailto:${email}`}
//                 style={{ color: "#04306e", textDecoration: "underline" }}
//               >
//                 {email}
//               </a>
//             </p>
//             <p
//               style={{
//                 fontSize: "16px",
//                 color: "#1a202c",
//                 margin: "0",
//               }}
//             >
//               <strong>Message:</strong>
//               <br />
//               {message}
//             </p>
//           </div>

//           {/* Action Button */}
//           <div style={{ textAlign: "center", margin: "24px 0" }}>
//             <a
//               href={`mailto:${email}?subject=Re: Contact Form Submission`}
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
//               Reply to {name}
//             </a>
//           </div>
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
//             This email was sent to notify you of a new contact form submission.
//           </p>
//           <p style={{ margin: "0" }}>
//             For any issues, contact{" "}
//             <a
//               href="mailto:support@gustoprofessionals.com"
//               style={{ color: "#04306e", textDecoration: "underline" }}
//             >
//               support@gustoprofessionals.com
//             </a>
//             .
//           </p>
//           <p style={{ margin: "8px 0 0" }}>
//             © 2025 Gusto Professionals. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// AdminEmailTemplate.tsx
import React from "react";

interface AdminEmailTemplateProps {
  name: string;
  whatsappNumber: string;
  email: string;
  message: string;
}

export const AdminEmailTemplate = ({
  name,
  whatsappNumber,
  email,
  message,
}: AdminEmailTemplateProps) => {
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
        New contact form submission from {name}
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
            New Contact Form Submission
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#4a5568",
              margin: "0 0 24px",
              textAlign: "center",
            }}
          >
            You have received a new message from the Drumbell Technologies
            website.
          </p>

          {/* Form Data */}
          <div
            style={{
              backgroundColor: "#f7fafc",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "#1a202c",
                margin: "0 0 12px",
              }}
            >
              <strong>Name:</strong> {name}
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#1a202c",
                margin: "0 0 12px",
              }}
            >
              <strong>Phone:</strong> {whatsappNumber}
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#1a202c",
                margin: "0 0 12px",
              }}
            >
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${email}`}
                style={{ color: "#04306e", textDecoration: "underline" }}
              >
                {email}
              </a>
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#1a202c",
                margin: "0",
              }}
            >
              <strong>Message:</strong>
              <br />
              {message}
            </p>
          </div>

          {/* Action Button */}
          <div style={{ textAlign: "center", margin: "24px 0" }}>
            <a
              href={`mailto:${email}?subject=Re: Contact Form Submission`}
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
              Reply to {name}
            </a>
          </div>
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
            This email was sent to notify you of a new contact form submission.
          </p>
          <p style={{ margin: "0" }}>
            For any issues, contact{" "}
            <a
              href="mailto:fortuneokwu@gmail.com"
              style={{ color: "#04306e", textDecoration: "underline" }}
            >
              fortuneokwu@gmail.com
            </a>
            .
          </p>
          <p style={{ margin: "8px 0 0" }}>
            © 2025 Drumbell Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
