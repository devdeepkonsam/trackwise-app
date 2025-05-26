import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh", 
            backgroundColor: "#f0f4f8" 
        }}>
            <div style={{ 
                padding: "2rem", 
                borderRadius: "8px", 
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
                backgroundColor: "#ffffff" 
            }}>
                <h1 style={{ 
                    textAlign: "center", 
                    marginBottom: "1rem", 
                    color: "#333" 
                }}>
                    Welcome to <span style={{ color: "teal", fontWeight: "bold" }}>TrackWise</span>
                </h1>
                <SignUp />
            </div>
        </div>
    );
}