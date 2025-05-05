// export default function AuthLayout(props) {

//     return <div id="AuthLayout">
//         {props.children}
//     </div>
// }
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Auth Domain</h1>
                {children}
            </body>
        </html>
    );
}
