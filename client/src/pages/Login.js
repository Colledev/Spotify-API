import React from "react";

function Login() {
    return (

            <div className="bg-black min-h-screen flex flex-col justify-center items-center ">
                <h1 className="text-white text-4xl mb-8">Welcome to my Spotify API Project</h1>
                <div className="mb-8">
                    <img src={process.env.PUBLIC_URL + '/Spotifyicon.png'} alt="Ícone do Spotify" className="w-64 m-16" />
                </div>
                <div className="mb-8">
                    <a href={'http://localhost:5000/login'} className="text-black bg-white px-8 py-4 rounded-full text-xl hover:bg-gray-400">Connect with Spotify</a>
                </div>
                <div className="text-white">
                    <div className="mb-4">Developed by Gabriel Colle</div>
                    <div className="flex justify-center items-center">
                        <a href='https://www.linkedin.com/in/gabriel-colle-169134259/' className="mr-4"><img src={process.env.PUBLIC_URL + '/profile/Linkedin.png'} alt="Ícone do Linkedin" className="w-10" /></a>
                        <a href='https://github.com/Colledev' className="mr-4"><img src={process.env.PUBLIC_URL + '/profile/Github.png'} alt="Ícone do Github" className="w-10" /></a>
                        <a href='mailto:gabrielcolle3@hotmail.com'><img src={process.env.PUBLIC_URL + '/profile/Gmail.png'} alt="Ícone do Gmail" className="w-12" /></a>
                    </div>
                </div>
            </div>
    );
}

export default Login;
