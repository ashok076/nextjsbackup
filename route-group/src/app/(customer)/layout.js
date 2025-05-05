export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Customer Domain</h1>
                {children}
            </body>
        </html>
    );
}
