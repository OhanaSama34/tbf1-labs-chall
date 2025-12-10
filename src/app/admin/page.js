export default function Admin() {
  const flag = process.env.ADMIN_FLAG || "FLAG_NOT_SET";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
          width: "100%",
          maxWidth: "540px",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Admin Dashboard 🛡️
        </h1>

        {/* ALERT BOX */}
        <div
          style={{
            background: "#fef9c3",
            border: "1px solid #facc15",
            color: "#a16207",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "24px",
          }}
        >
          <p style={{ fontWeight: "600", marginBottom: "4px" }}>
            Selamat datang, Hengker TBF1
          </p>
          <p style={{ fontSize: "14px", marginTop: "4px" }}>
            Kamu berhasil masuk admin tanpa login...{" "}
            
            <span style={{ fontWeight: "700" }}>
              maap ya meme-nya jmk48, soalnya
              author gak tau mau masukin meme apalagi
            </span>
          </p>
        </div>

        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "20px"
          }}
        >
          <iframe
            style={{ width: "100%", height: "100%" }}
            src="https://www.youtube.com/embed/3M0eeXXnjeo?autoplay=0&mute=0&controls=0&showinfo=0&modestbranding=1&rel=0"
            title="Meme Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* FLAG */}
        <div
          style={{
            background: "#dcfce7",
            border: "1px solid #22c55e",
            color: "#166534",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <p style={{ fontWeight: "700", fontSize: "18px" }}>
            🎉 Flag berhasil ditemukan!
          </p>

          <p
            style={{
              marginTop: "8px",
              marginBottom: "8px",
              fontFamily: "monospace",
              fontSize: "14px",
              wordBreak: "break-all",
            }}
          >
            {flag}
          </p>

          <p style={{ fontWeight: "600", fontSize: "14px" }}>
            Author : NafyCat69
          </p>
        </div>
      </div>
    </div>
  );
}
