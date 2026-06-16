import React from "react";
import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaTiktok
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const languages = [
        "English (UK)",
        "Čeština",
        "Dansk",
        "Deutsch",
        "English",
        "Español",
        "Français",
        "Italiano",
        "Nederlands",
        "Português (Brasil)",
        "Русский",
        "हिंदी",
        "한국어",
        "中文",
        "日本語"
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <a href="/">
                        <img
                            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e278299a53f5bf88615e90_Symbol.svg"
                            alt="Discord Home"
                        />
                    </a>

                    <h4>Language</h4>

                    <select>
                        {languages.map((language) => (
                            <option key={language}>{language}</option>
                        ))}
                    </select>

                    <div className="social-links">
                        <a href="https://x.com/discord" target="_blank" rel="noreferrer">
                            <FaXTwitter />
                        </a>

                        <a
                            href="https://www.instagram.com/discord/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.facebook.com/discord/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://www.youtube.com/discord"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaYoutube />
                        </a>

                        <a
                            href="https://www.tiktok.com/@discord"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaTiktok />
                        </a>
                    </div>
                </div>

                <div className="footer-columns">
                    <div>
                        <h3>Product</h3>
                        <a href="/download">Download</a>
                        <a href="/nitro">Nitro</a>
                        <a href="/application-directory">App Directory</a>
                    </div>

                    <div>
                        <h3>Company</h3>
                        <a href="/company">About</a>
                        <a href="/careers">Jobs</a>
                        <a href="/branding">Brand</a>
                        <a href="/newsroom">Newsroom</a>
                    </div>

                    <div>
                        <h3>Resources</h3>
                        <a href="https://support.discord.com/hc">Support</a>
                        <a href="/safety">Safety</a>
                        <a href="/blog">Blog</a>
                        <a href="/creators">Creators</a>
                        <a href="/community">Community</a>
                        <a href="/developers">Developers</a>
                        <a href="/ads/quests">Quests</a>
                    </div>

                    <div>
                        <h3>Policies</h3>
                        <a href="/terms">Terms</a>
                        <a href="/privacy">Privacy</a>
                        <a href="/guidelines">Guidelines</a>
                        <a href="/acknowledgements">Acknowledgements</a>
                        <a href="/licenses">Licences</a>
                    </div>
                </div>
            </div>

            <div className="footer-brand">
                <img
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/67ac9b4644222140ae614b06_Wordmark.svg"
                    alt="Discord"
                />
            </div>
        </footer>
    );
}