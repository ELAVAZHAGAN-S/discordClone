import main from './assets/main.png'
import Footer from './Footer'
export default function Home() {
    return (
        <>
            <div className="home d-flex justify-content-center gap-5">
                <div className="home-content w-50 d-block text-white">
                    <h1 className="home-title">GROUP CHAT <br /> THAT'S ALL <br /> FUN & GAMES</h1>
                    <p>Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and <br /> hang out.</p>
                </div>
                <div className="home-sider w-50">
                    <img src={main} alt="Discord Hero Illustration" />
                </div>
            </div>
            <div className="buttons">
                <button className="py-3 px-4 text-black"><i className="bi bi-download me-2"></i>Download for Windows</button>
                <button className="py-3 px-4 text-white discord-blue-btn">Open Discord in your browser</button>
            </div>
            <div className="cards-container">
                <div className="card card-1 mt-5 w-90 d-flex justify-content-center align-items-center">
                    <div className="card-container d-flex justify-content-center align-items-center text-center card-content-wrapper">
                        <video id="d47663e3-0c39-72fc-b3c9-c24ed4385454-video" autoPlay loop style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6787b62a9742f59453ba8919_Discord_Websote_Refresh_Emojis2_EN-poster-00001.jpg")', }} muted playsInline data-wf-ignore="true" data-object-fit="cover" >
                            <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6787b62a9742f59453ba8919_Discord_Websote_Refresh_Emojis2_EN-transcode.mp4" data-wf-ignore="true" />
                            <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6787b62a9742f59453ba8919_Discord_Websote_Refresh_Emojis2_EN-transcode.webm" data-wf-ignore="true" />
                        </video>
                        <div className="card-content d-flex flex-column justify-content-center align-items-center text-start text-white">
                            <h2 className="card-title">MAKE YOUR <br /> GROUP CHATS <br /> MORE FUN</h2>
                            <p>Use custom emoji, stickers, <br /> soundboard effects and more to <br /> add your personality to your voice, <br /> video, or text chat. Set your avatar and <br /> a custom status, and write your own <br /> profile to show up in chat your way.</p>
                        </div>
                    </div>
                </div>
                <div className="card mt-5 w-90 d-flex justify-content-center align-items-center">
                    <div className="card-container d-flex justify-content-center align-items-center text-center card-content-wrapper">
                        <div className="card-content d-flex flex-column justify-content-center align-items-center text-start text-white">
                            <h2 className="card-title">STREAM LIKE <br /> YOU'RE IN THE <br /> SAME ROOM</h2>
                            <p>High quality and low latency streaming <br /> makes it feel like you're hanging out on <br />the couch with friends while playing a <br /> game, watching shows, looking at <br /> photos, or idk doing homework or <br /> something.</p>
                        </div>
                        <video id="324f7f19-533a-0d17-376b-6e58d5a021e2-video" autoPlay loop style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6763b611120b46189e164b4a_Discord_Website_Refresh_EN-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                            <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6763b611120b46189e164b4a_Discord_Website_Refresh_EN-transcode.mp4" data-wf-ignore="true" />
                            <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6763b611120b46189e164b4a_Discord_Website_Refresh_EN-transcode.webm" data-wf-ignore="true" />
                        </video>
                    </div>
                </div>
                <div className="card mt-5 w-90 d-flex justify-content-center align-items-center">
                    <div className="card-container d-flex justify-content-center align-items-center text-center card-content-wrapper">
                        <video id="d09e1f32-0412-12b7-182a-7b2631beee18-video" autoPlay loop style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/683a317f73a44ea577535c09_Homepage_Hop-In_EN-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                            <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/683a317f73a44ea577535c09_Homepage_Hop-In_EN-transcode.mp4" data-wf-ignore="true" />
                            <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/683a317f73a44ea577535c09_Homepage_Hop-In_EN-transcode.webm" data-wf-ignore="true" />
                        </video>
                        <div className="card-content d-flex flex-column justify-content-center align-items-center text-start text-white">
                            <h2 className="card-title">HOP IN WHEN YOU'RE FREE, NO NEED TO <br /> CALL</h2>
                            <p>Easily hop in and out of voice or text <br /> chats without having to call or invite <br /> anyone, so your party chat lasts before, during, and after your game session.</p>
                        </div>
                    </div>
                </div>
                <div className="infinite-scroll-container">
                    <div className="infinite-scroll">
                        <h2>PLAY</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>CHAT</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>HANG OUT</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>TALK</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>PLAY</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>CHAT</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>HANG OUT</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>TALK</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                    </div>
                    <div className="infinite-scroll" aria-hidden="true">
                        <h2>PLAY</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>CHAT</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>HANG OUT</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>TALK</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>PLAY</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>CHAT</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>HANG OUT</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                        <h2>TALK</h2>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="" width="25px" height="25px" />
                    </div>
                </div>
                <div className="cards-container">
                    <div className="card mt-5 w-90 d-flex justify-content-center align-items-center">
                        <div className="card-container d-flex justify-content-center align-items-center text-center card-content-wrapper">
                            <video id="d47663e3-0c39-72fc-b3c9-c24ed4385454-video" autoPlay loop style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6787b62a9742f59453ba8919_Discord_Websote_Refresh_Emojis2_EN-poster-00001.jpg")', }} muted playsInline data-wf-ignore="true" data-object-fit="cover" >
                                <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6787b62a9742f59453ba8919_Discord_Websote_Refresh_Emojis2_EN-transcode.mp4" data-wf-ignore="true" />
                                <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6787b62a9742f59453ba8919_Discord_Websote_Refresh_Emojis2_EN-transcode.webm" data-wf-ignore="true" />
                            </video>
                            <div className="card-content d-flex flex-column justify-content-center align-items-center text-start text-white">
                                <h2 className="card-title">MAKE YOUR <br /> GROUP CHATS <br /> MORE FUN</h2>
                                <p>Use custom emoji, stickers, <br /> soundboard effects and more to <br /> add your personality to your voice, <br /> video, or text chat. Set your avatar and <br /> a custom status, and write your own <br /> profile to show up in chat your way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-5 w-90 d-flex justify-content-center align-items-center">
                        <div className="card-container d-flex justify-content-center align-items-center text-center card-content-wrapper">
                            <div className="card-content d-flex flex-column justify-content-center align-items-center text-start text-white">
                                <h2 className="card-title">STREAM LIKE <br /> YOU'RE IN THE <br /> SAME ROOM</h2>
                                <p>High quality and low latency streaming <br /> makes it feel like you're hanging out on <br />the couch with friends while playing a <br /> game, watching shows, looking at <br /> photos, or idk doing homework or <br /> something.</p>
                            </div>
                            <video id="324f7f19-533a-0d17-376b-6e58d5a021e2-video" autoPlay loop style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6763b611120b46189e164b4a_Discord_Website_Refresh_EN-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                                <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6763b611120b46189e164b4a_Discord_Website_Refresh_EN-transcode.mp4" data-wf-ignore="true" />
                                <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6763b611120b46189e164b4a_Discord_Website_Refresh_EN-transcode.webm" data-wf-ignore="true" />
                            </video>
                        </div>
                    </div>
                    <div className="card mt-5 w-90 d-flex justify-content-center align-items-center">
                        <div className="card-container d-flex justify-content-center align-items-center text-center card-content-wrapper">
                            <video id="d09e1f32-0412-12b7-182a-7b2631beee18-video" autoPlay loop style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/683a317f73a44ea577535c09_Homepage_Hop-In_EN-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                                <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/683a317f73a44ea577535c09_Homepage_Hop-In_EN-transcode.mp4" data-wf-ignore="true" />
                                <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/683a317f73a44ea577535c09_Homepage_Hop-In_EN-transcode.webm" data-wf-ignore="true" />
                            </video>
                            <div className="card-content d-flex flex-column justify-content-center align-items-center text-start text-white">
                                <h2 className="card-title">HOP IN WHEN YOU'RE FREE, NO NEED TO <br /> CALL</h2>
                                <p>Easily hop in and out of voice or text <br /> chats without having to call or invite <br /> anyone, so your party chat lasts before, during, and after your game session.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom" style={{ zIndex: '2' }}>
                <h1>YOU CAN'T SCROLL ANYMORE.<br /> BETTER GO CHAT.</h1>
                <button className="py-3 px-4 text-black"><i className="bi bi-download me-2"></i>Download for Windows</button>
                <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/675005dc03927e9683fcaaee_Footer.webp" alt="" width="100%" style={{ userSelect: 'none', pointerEvents: 'none' }} />
                <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6729dc6215aff5ed59997842_Wumpus%C2%A0%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp" alt="" style={{ width: '450px', position: 'absolute', bottom: '-150px', left: '35%', userSelect: 'none', pointerEvents: 'none' }} />
            </div>
            <Footer />
        </>
    )
}