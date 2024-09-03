import { ClerkProvider, SignIn } from "@clerk/nextjs";

export default function Page(){
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
        margin: 0 // Ensure no margin is added
      };        
    return(
        <ClerkProvider>
            <div style={containerStyle}>
                <SignIn />
            </div>
        </ClerkProvider>
    );
}